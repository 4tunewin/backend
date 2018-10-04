import { promisify } from 'bluebird';
import { map } from 'lodash';
import { web3, redis } from '../../providers';

export const Query = {
    /**
     * Return history of games
     */
    history: async (obj, args, context) => {
        return redis.lrange('games', 0, 25).then(games => {
            return map(games, JSON.parse);
        });
    },
};
