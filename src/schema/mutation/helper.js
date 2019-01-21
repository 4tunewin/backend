import { promisify } from 'bluebird';
import { padStart } from 'lodash';

import { web3 } from '../../providers';

/**
 * Sign bet with provided data and secret signer address
 * @param {*} commit
 * @param {*} lastBlockNumber
 * @param {*} secretSigner
 */
export const getSignature = (commit, lastBlockNumber, secretSigner) => {
    const sign = promisify(web3.eth.sign, { context: web3.eth });

    const payload = [
        '0x',
        padStart(lastBlockNumber.toString(16), 10, 0),
        commit.substr(2),
    ].join('');

    const payloadHash = web3.utils.sha3(payload, {
        encoding: 'hex',
    });

    // Sign payload with secret signer address
    return sign(payloadHash, secretSigner);
};
