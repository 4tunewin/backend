import Promise from 'bluebird';
import { BigNumber } from 'bignumber.js';
import { redis } from '../../providers';

export const Stats = {
    /**
     * Returns keys for all bets
     */
    wagers: (obj, args, context) => {
        return redis.keys('game:*');
    },

    /**
     * Return keys for all winners
     */
    winners: (obj, args, context) => {
        return redis.keys('winner:*');
    },
};

export const StatsWagers = {
    /**
     * Returns total number of bets
     */
    bets: (obj, args, context) => {
        return obj.length;
    },

    /**
     * Returns total amount across all bets
     */
    amount: async (obj, args, context) => {
        const result = await Promise.reduce(
            obj,
            async (sum, key) => {
                const json = await redis.get(key);
                const data = JSON.parse(json);

                return sum.plus(data.bet.amount);
            },
            new BigNumber(0),
        );

        return result.toString();
    },
};

export const StatsWinners = {
    /**
     * Returns total number of bets
     */
    address: async (obj, args, context) => {
        const json = await redis.get(obj);
        const data = JSON.parse(json);

        return data.beneficiary;
    },
    /**
     * Returns total amount across all bets
     */
    amount: async (obj, args, context) => {
        const json = await redis.get(obj);
        const data = JSON.parse(json);

        return data.amount;
    },
};
