import {getDate} from "./getDate";

describe('getDate function', () => {
    it('incorrect timestamp type', () => {
        const result = getDate('lol');
        expect(result).toBeUndefined();
    });

    it('timestamp is null', () => {
        const result = getDate(null);
        expect(result).toBeUndefined();
    });

    it('correct timestamp', () => {
        const date = new Date('03.19.2020').getTime();

        const result = getDate(date);

        expect(result).toEqual('19 марта, чт, 2020 год');
    });

});
