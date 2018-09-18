import { promisify } from 'bluebird';
import { web3 } from '../../providers';

export const SignBetPayload = {
    /**
     * Resolve BigNumber value as decimal number
     */
    commit: (root, args, context) => {
        return '0x' + root.commit.toString(16);
    },

    /**
     * Return current gas price based on last X blocks
     */
    gasPrice: (root, args, context) => {
        const getGasPrice = promisify(web3.eth.getGasPrice);
        return getGasPrice().then(price => price.toNumber());
    },
};
