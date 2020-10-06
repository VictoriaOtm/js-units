import {getDate} from "./getDate";

describe('getDate()', () => {
    it('timestamp', () => {
        const result = getDate(1544356800000);

        expect(result).toEqual('9 декабря, вс, 2018 год');
    });

    it('not a number', () => {
        const result = getDate([1, 2, 34]);

        expect(result).toEqual(undefined);
    });

    it('falsy', () => {
        const result = getDate(null);

        expect(result).toEqual(undefined);
    });
});
