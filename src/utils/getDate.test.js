import {getDate} from './getDate.js';

describe('getDate function', () => {
    it('Correct data', () => {
        const data = 1544356800000;
        const result = getDate(data);
        expect(result).toEqual('9 декабря, вс, 2018 год');
    });

    it('Incorrect data', () => {
        const data = 'time';
        const result = getDate(data);
        expect(result).toBeUndefined();
    });
});
