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
    const mockSortFunc = jest.fn((a, b) => a - b);

    beforeEach(() => {
        jest.clearAllMocks();
    });


    it('sort function called', () => {
        const fakeSortFunction = jest.fn();
        sortOrders(fakeOrders, fakeSortFunction);
        expect(fakeSortFunction).toHaveBeenCalled();
    })

    it('sort works', () => {
        // const mockSortFunc = jest.fn((a, b) => a - b);

        const array = [1, 4, 3];
        sortOrders(array, mockSortFunc)

        expect(mockSortFunc).toHaveBeenCalled();
        expect(array).toEqual([1, 3, 4]);
    })

    test.each([
        [fakeOrders, 1],
        [1, mockSortFunc],
        [undefined, mockSortFunc],
        [null, 1],
        [[], null],
    ])('Undefined results', (orders, sortFunction) => {
        const result = sortOrders(orders, sortFunction);
        expect(mockSortFunc).not.toHaveBeenCalled();
        expect(result).toBeUndefined();
    })


})

describe('sortByDate function', () => {
    test.each([
        [{date: 111}, {date: 222}, 1],
        [{date: 222}, {date: 111}, -1],
        [{date: 111}, {date: 111}, 0],
    ])('sortByDate good test', (order1, order2, expected) => {
        const result = sortByDate(order1, order2);
        expect(result).toBe(expected);
    })

    test.each([
        [{asd: 111}, {date: 222}, 0],
        [['date', 222], {date: 111}, 0],
        [undefined, {date: 111}, 0],
        [null, {date: 111}, 0]
    ])('sortByDate bad test', (order1, order2, expected) => {
        const result = sortByDate(order1, order2);
        expect(result).toBe(expected);
    })
})
