import { promisify } from 'bluebird';
import { web3 } from '../../providers';
import { DiceContract } from '../../contracts';

const getPaymentEvents = () => {
    return DiceContract.deployed()
        .then(instnace => {
            return instnace.Payment();
        })
        .then(event => {
            return promisify(event.get, { context: event })();
        });
};

export const Query = {
    /**
     * Return history of games
     */
    history: async (obj, args, context) => {
        console.log('HISTORY');

        const bets = await DiceContract.bets();
        console.log(bets);

        // const events = await getPaymentEvents();

        console.log(events);
    },
};
