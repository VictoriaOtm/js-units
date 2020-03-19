import {getDate,} from "./getDate";

describe('getDate', () => {
    it('given timestamp null', () => {
        const result = getDate(null);

        expect(result).toBeUndefined();
    });

    it('given timestamp not number', () => {
        const result = getDate('random mess');

        expect(result).toBeUndefined();
    });

    it('positive', () => {
        const result = getDate(1584627487357);

        expect(result).toEqual('19 марта, чт, 2020 год');
    });
});
