import { promisify } from 'bluebird';
import { map, min } from 'lodash';
import { web3, redis } from '../../providers';

export const Query = {
    /**
     * Return history of games
     */
    history: async (obj, args, context) => {
        // Number of history results to show by default
        const HISTORY_DEFAULT_LIMIT = 25;

        return redis
            .lrange('games', 0, min([args.limit, HISTORY_DEFAULT_LIMIT]))
            .then(games => {
                return map(games, JSON.parse);
            });
    },
};
