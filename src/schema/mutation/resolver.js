import { web3, logger, redis } from '../../providers';
import { getSignature } from './helper';
import config from '../../config';

// Maximal blocks offset where "commit" is still considered valid
const COMMIT_BLOCK_OFFSET = 250;

export const Mutation = {
    /**
     * Generate a new bet signature
     */
    signBet: async (root, args, context) => {
        // Get current accounts
        const account = web3.eth.defaultAccount;

        // Get current block number and append offset
        const currentBlockNumber = await web3.eth.getBlockNumber();
        const commitLastBlock = currentBlockNumber + COMMIT_BLOCK_OFFSET;

        // Generate random 32-bits hash
        const commit = web3.utils.randomHex(32);

        // Get hash of provided commit
        const commitHash = web3.utils.sha3(commit, { encoding: 'hex' });
        const signature = await getSignature(
            commitHash,
            commitLastBlock,
            account,
        );

        logger.info(
            {
                lastBlock: commitLastBlock,
                commit,
                secret: commitHash,
                signature,
            },
            'Signing a new bet',
        );

        // Save commit hash and acutual commit for 1 hour
        const data = JSON.stringify({
            commit,
            lastBlock: commitLastBlock,
        });

        await redis.set(`commit:${commitHash}`, data, 'EX', 3600);

        return {
            commit: commitHash,
            commitLastBlock,
            signature,
        };
    },
};
