import {getDate} from './getDate.js';

describe('getDate function', () => {

    it('null date', () => {
        const result = getDate(null);
        expect(result).toBeUndefined();
    });

    it('correct date', () => {
        const timestamp = Date.parse('March 19, 2020');
        const result = getDate(timestamp);
        expect(result).toBe('19 марта, чт, 2020 год');
    });
});