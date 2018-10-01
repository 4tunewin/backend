import Web3 from 'web3';
import TruffleContract from 'truffle-contract';

import { web3 } from '../providers';
import Dice from './Dice.json';

const DiceContract = TruffleContract(Dice);
DiceContract.setProvider(web3.currentProvider);

export default DiceContract;
