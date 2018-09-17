import { promisify } from 'bluebird';
import { web3 } from '../../providers';

export const SignBetPayload = {
    /**
     * Return current gas price
     */
    gasPrice: (root, args, context) => {
        const getGasPrice = promisify(web3.eth.getGasPrice);
        return getGasPrice().then(price => price.toNumber());
    },
};
