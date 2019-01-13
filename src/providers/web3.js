/**
 * Web3 provider that connects to specified ethereum network
 * and interacts with smart contract.
 */
import Web3 from 'web3';
import { pick } from 'lodash';

import logger from './logger';
import config from '../config';

/**
 * Create and return web3 provider based on provided config
 */
const initProvider = config => {
    let provider = null;

    switch (config.provider) {
        case 'ws':
            provider = new Web3.providers.WebsocketProvider(config.uri);

            provider.on('connect', error => {
                logger.info(
                    `Web3 provider successflully connected to ${config.uri}`,
                );
            });
            provider.on('error', error => {
                logger.error(
                    `Web3 provider cought an error; Error: ${error.message}`,
                );
            });
            provider.on('end', event => {
                logger.warn(
                    pick(event, ['type', 'reason']),
                    `Web3 provider has disconnected from ${config.uri}`,
                );
            });
            break;
        case 'http':
        default: {
            provider = new Web3.providers.HttpProvider(config.uri);
        }
    }

    // HACK: `sendAsync` was removed
    if (!provider.sendAsync) {
        provider.sendAsync = provider.send;
    }

    return provider;
};

const web3 = new Web3(initProvider(config.network));

// Unlock account using private key provided as env variable
const account = web3.eth.accounts.privateKeyToAccount(
    `0x${process.env.WEB3_PRIVATE_KEY}`,
);
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

export default web3;
