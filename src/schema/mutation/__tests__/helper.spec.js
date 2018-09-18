import { getRandomNumber, signBet } from '../helper';

describe('helper', () => {
    describe('getRandomNumber', () => {
        it('returns 32 bits number', () => {
            const number = getRandomNumber(32);
            expect(number.toString(16)).toHaveLength(66);
        });

        it('always generate a different number', () => {
            const number1 = getRandomNumber(32);
            const number2 = getRandomNumber(32);
            const number3 = getRandomNumber(32);

            expect(number1 !== number2).toBeTruthy();
            expect(number1 !== number3).toBeTruthy();
            expect(number2 !== number3).toBeTruthy();
        });
    });
});
