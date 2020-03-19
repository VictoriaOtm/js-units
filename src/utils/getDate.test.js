import {getDate} from "./getDate";
import {sortByItemCount} from "./sortOrders";

describe('getDate function', () => {

    it('date is right', () => {
        const result = getDate(1000000000000);
        expect(result).toEqual('9 сентября, вс, 2001 год');
    });

    it('date is null', () => {
        const result = getDate(null);
        expect(result).toEqual(undefined);
    });

    it('date is string', () => {
        const result = getDate('sadassad');
        expect(result).toEqual(undefined);
    });

});