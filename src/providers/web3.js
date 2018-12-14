/**
 * Web3 provider that connects to specified ethereum network
 * and interacts with smart contract.
 */
import Web3 from 'web3';
import HDWalletProvider from 'truffle-hdwallet-provider';

import config from '../config';

const provider = new HDWalletProvider(process.env.MNEMONIC, config.network.uri);
const web3 = new Web3(provider);

export default web3;
