import React from 'react'
import {getSortFunction, sortByDate, sortByItemCount, sortOrders} from './sortOrders';
import {fakeOrders} from "../mock/fakeOrders";


describe('sortByItemCount function', () => {
    const cases = [
        [{items: ['item1', 'item2']}, {items: ['1', '2']}, 0],
        [{items: ['item1', 'item2', 'item3']}, {items: ['1', '2']}, 1],
        [{items: ['item1', 'item2']}, {items: ['1', '2', '3']}, -1],
        [{items: undefined}, {items: undefined}, 0],
        [undefined, undefined, 0],
    ];

    test.each(cases)('(%i, %i , %i)',
        (a, b, expected) => {
            const result = sortByItemCount(a, b);
            expect(result).toBe(expected);
        });

    it('orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });


});

describe('sortByDate function', () => {
    const cases = [
        [{date: ['0']}, {date: ['0']}, 0],
        [{date: ['0']}, {date: ['1']}, 1],
        [{date: ['1']}, {date: ['0']}, -1],
        [{date: undefined}, {date: undefined}, 0],
        [undefined, undefined, 0],
        [null, null, 0],
    ];

    test.each(cases)('(%i, %i , %i)',
        (a, b, expected) => {
            const result = sortByDate(a, b);
            expect(result).toBe(expected);
        });

});

describe('getSortFunction function', () => {
    it('wrong type', () => {
        const type = 0;
        const result = getSortFunction(type);

        expect(result).toBe(undefined);
    });
});

describe('sortOrders function', () => {
    it('', () => {
        const fakeSortFunc = jest.fn();
        const result = sortOrders(fakeOrders, fakeSortFunc);
        expect(fakeSortFunc).toHaveBeenCalled();
    });
    it('', () => {
        const fakeSortFunc = jest.fn();
        const result = sortOrders(undefined, fakeSortFunc);
        expect(fakeSortFunc).not.toHaveBeenCalled()
    });
    it('', () => {
        const fakeSortFunc = jest.fn();
        const result = sortOrders(fakeOrders, undefined);
        expect(fakeSortFunc).not.toHaveBeenCalled()
    });
});