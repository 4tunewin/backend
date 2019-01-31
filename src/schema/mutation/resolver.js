import uuid from 'uuid';

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

    /**
     * Register a new user
     */
    registerUser: async (obj, args, context) => {
        const { address, username } = args.input;

        // Validate address
        if (address.length !== 42) {
            throw new Error('Invalid address');
        }

        // Validate username
        const usernameExists = await redis.sismember('usernames', username);
        if (usernameExists) {
            throw new Error('Username is taken');
        }

        const user = { address, username };
        await redis
            .pipeline()
            .set(`user:${address}`, JSON.stringify(user))
            .sadd('usernames', username)
            .exec();

        return user;
    },

    /**
     * Send a new message to the chat
     */
    sendMessage: async (obj, args, context) => {
        const message = {
            id: uuid.v4(),
            from: args.input.from,
            text: args.input.message,
            createdAt: Date.now(),
        };

        await redis
            .pipeline()
            .rpush('messages', JSON.stringify(message))
            .ltrim('messages', -25, -1) // Keep last 25 messages
            .publish('message', JSON.stringify(message))
            .exec();

        return message;
    },
};
