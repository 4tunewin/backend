import crypto from 'crypto';
import { promisify } from 'bluebird';
import { padStart } from 'lodash';
import { BigNumber } from 'bignumber.js';

import { web3 } from '../../providers';
import config from '../../config';

// Maximal blocks offset where "commit" is still considered valid
const COMMIT_BLOCK_OFFSET = 200;

export const Mutation = {
    /**
     * Generate a new bet signature
     */
    signBet: async (root, args, context) => {
        // Promisify web3 methods that requires callback
        const getBlockNumber = promisify(web3.eth.getBlockNumber);
        const sign = promisify(web3.eth.sign);

        // Get current block number and append offset
        const blockNumber = await getBlockNumber();
        const commitLastBlock = blockNumber + COMMIT_BLOCK_OFFSET;

        // Generate random 32-bits hash
        const commit = new BigNumber(crypto.randomBytes(32).toString('hex'));
        console.log(commit.toString());
        const packedCommit = '0x' + padStart(commit.toString(16), 64, 0);
        const commitHash = web3.sha3(packedCommit, {
            encoding: 'hex',
        });

        // Pack commit and commitLastBlock
        const payload = [
            '0x',
            padStart(commitLastBlock.toString(16), 10, 0),
            commitHash.substr(2),
        ].join('');

        const payloadHash = web3.sha3(payload, {
            encoding: 'hex',
        });

        // Sign payload with secret signer address
        const signature = await sign(config.secretSigner, payloadHash);

        return {
            commit: commit.toString(10),
            commitLastBlock,
            signature,
        };
    },
};
