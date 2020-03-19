import {getDate} from './getDate';

describe('getDate function', () => {
    it('valid timestamp', () => {
        const result = getDate(Date.UTC(2009, 4, 23));
        expect(result).toBe(`23 мая, сб, 2009 год`);
    });

    it('null timestamp', () => {
        expect(getDate(null)).toBeUndefined();
    });

    it('wrong type timestamp', () => {
        expect(getDate('xyz')).toBeUndefined();
    });
});