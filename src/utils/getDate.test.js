import {getDate} from "./getDate";

describe('getDate function', () => {
    it('orders are null', () => {
        const result = getDate("gdgdgd");
        expect(result).toBeUndefined();
    });

    it('get right date', () => {
        let date1 = new Date(2016, 3,4);

        const result = getDate(date1.getTime());

        expect(result).toBe("4 апреля, пн, 2016 год");
    });
});