import { promisify } from 'bluebird';
import { web3 } from '../../providers';

// An extra amount applied on estimated gas price to be sure that
// transaction will be executed
const GAS_PRICE_EXTRA = '1000000000';

export const SignBetPayload = {
    /**
     * Resolve BigNumber value as decimal number
     */
    commit: (root, args, context) => {
        return root.commit.toString(16);
    },

    /**
     * Return current gas price based on last X blocks
     */
    gasPrice: async (root, args, context) => {
        return web3.eth.getGasPrice();
        // const currentGasPrice = await web3.eth.getGasPrice();
        // return new web3.utils.BN(currentGasPrice)
        //     .add(new web3.utils.BN(GAS_PRICE_EXTRA))
        //     .toString();
    },
};
