import { isFibonacci } from '../fibonacci';

/**
 * todo: to test `isSquare` function on `../fibonacci`.
 * and make sure coverage is over 95%
 */

describe('isFibonacci',() => {
    it('is a function', async() => {
        expect(isFibonacci).toBeInstanceOf(Function);
    });

    it('correct response to fibenacci number', () => {
        const result = isFibonacci(5);
        expect(result).toEqual(true);
    });

    it('correct response to non fibenacci number', () => {
        const result = isFibonacci(6);
        expect(result).toEqual(false);
    });
});