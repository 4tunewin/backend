import Promise from 'bluebird';
import { map, slice } from 'lodash';
import { web3, redis } from '../../providers';

export const Query = {
    /**
     * Return history of games
     */
    history: async (obj, args, context) => {
        // Number of history results to show by default
        const HISTORY_DEFAULT_LIMIT = 25;

        const keys = await redis.keys('game:*');
        return map(slice(keys, 0, HISTORY_DEFAULT_LIMIT + 1), async key => {
            const game = await redis.get(key);
            return JSON.parse(game);
        });
    },
};
