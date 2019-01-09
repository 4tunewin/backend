/**
 * Web3 provider that connects to specified ethereum network
 * and interacts with smart contract.
 */
import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';

import config from '../config';

/**
 * Create and return web3 provider based on provided config
 */
const initProvider = config => {
    switch (config.provider) {
        case 'privateKey':
            return new PrivateKeyProvider(
                process.env.WEB3_PRIVATE_KEY,
                config.uri,
            );
        case 'http':
        default: {
            return new Web3.providers.HttpProvider(config.uri);
        }
    }
};

const web3 = new Web3(initProvider(config.network));

export default web3;
