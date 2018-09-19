import { promisify } from 'bluebird';

import { web3, logger } from '../../providers';
import { getRandomNumber, getSignature } from './helper';
import config from '../../config';

// Maximal blocks offset where "commit" is still considered valid
const COMMIT_BLOCK_OFFSET = 200;

export const Mutation = {
    /**
     * Generate a new bet signature
     */
    signBet: async (root, args, context) => {
        // Get current block number and append offset
        const getBlockNumber = promisify(web3.eth.getBlockNumber);
        const commitLastBlock = (await getBlockNumber()) + COMMIT_BLOCK_OFFSET;

        // Generate random 32-bits hash
        const commit = getRandomNumber(32);

        // Get hash of provided commit
        const commitHash = web3.sha3(commit, { encoding: 'hex' });
        const signature = await getSignature(
            commit,
            commitLastBlock,
            config.secretSigner,
        );

        logger.info(
            {
                ...args.input,
                block: commitLastBlock,
                commit,
                secret: commitHash,
                signature,
            },
            'Signing a new bet',
        );

        return {
            commit,
            commitLastBlock,
            signature,
        };
    },
};
