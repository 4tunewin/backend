import { promisify } from 'bluebird';
import { web3 } from '../../providers';

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
    gasPrice: (root, args, context) => {
        return web3.eth.getGasPrice();
    },
};
