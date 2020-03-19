import {getDate} from "./getDate";

describe('getDate function wrong params', () => {
    it('date is null', () => {
        const result = getDate(null);
        expect(result).toEqual(undefined);
    });

    it('date is not number', () => {
        const result = getDate(Date.now().toString());
        expect(result).toEqual(undefined);
    });

    it('date is negative number', () => {
        const result = getDate(-1);
        expect(result).toEqual("1 января, чт, 1970 год");
    });
});
