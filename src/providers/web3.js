/**
 * Web3 provider that connects to specified ethereum network
 * and interacts with smart contract.
 */
import Web3 from 'web3';
import PrivateKeyProvider from 'truffle-privatekey-provider';

import config from '../config';

// const provider = new PrivateKeyProvider(
//     process.env.PRIVATE_KEY,
//     config.network.uri,
// );

const provider = new Web3.providers.HttpProvider(config.network.uri);

const web3 = new Web3(provider);

export default web3;
