import React from 'react'
import {sortByItemCount, sortOrders, sortByDate} from './sortOrders';
import {fakeOrders} from "../mock/fakeOrders";

describe('sortByItemCount function', () => {
    it('orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('same items count', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });
});

describe('sortOrders function', () => {
    it('sort function called', () => {
        const fakeSortFunction = jest.fn();
        const result = sortOrders(fakeOrders, fakeSortFunction);
        expect(fakeSortFunction).toHaveBeenCalled();
    })

    test.each([
        [fakeOrders, 1, undefined],
        [1, jest.fn(), undefined],
        [undefined, jest.fn(), undefined],
        [null, 1, undefined],
        [[], null, undefined],
    ])('Undefined results', (orders, sortFunction, expected) => {
        const result = sortOrders(orders, sortFunction);
        expect(result).toBe(expected);
    })

    it('undefined result if bad orders', () => {
        const fakeSortFunction = jest.fn();
        const result = sortOrders(1, fakeSortFunction);
        expect(result).toBeUndefined();
    })

    it('undefined result if bad functions', () => {
        const result = sortOrders(fakeOrders, 1);
        expect(result).toBeUndefined();
    })

})

describe('sortByDate function', () => {
    test.each([
        [{date: 111}, {date: 222}, 1],
        [{date: 222}, {date: 111}, -1],
        [{date: 111}, {date: 111}, 0]
    ])('sortByDate good test', (order1, order2, expected) => {
        const result = sortByDate(order1, order2);
        expect(result).toBe(expected);
    })

    test.each([
        [{asd: 111}, {date: 222}, 0],
        [['date', 222], {date: 111}, 0],
        [undefined, {date: 111}, 0]
    ])('sortByDate bad test', (order1, order2, expected) => {
        const result = sortByDate(order1, order2);
        expect(result).toBe(expected);
    })
})
