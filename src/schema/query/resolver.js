import Promise from 'bluebird';
import { slice, orderBy } from 'lodash';
import { web3, redis } from '../../providers';

export const Query = {
    /**
     * Return history of games
     */
    history: async (obj, args, context) => {
        // Number of history results to show by default
        const HISTORY_DEFAULT_LIMIT = 50;

        const keys = await redis.keys('game:*');
        const items = await Promise.map(keys, async key => {
            const game = await redis.get(key);
            return JSON.parse(game);
        });

        // Oreder games by creation date
        const orederedItems = orderBy(items, ['createdAt'], ['desc']);

        // Limit games to provided limit or to default limit
        const slicedItems = slice(
            orederedItems,
            0,
            args.limit || HISTORY_DEFAULT_LIMIT + 1,
        );

        return slicedItems;
    },

    /**
     * Returns statistics
     */
    stats: (obj, args, context) => {
        return {};
    },
};
