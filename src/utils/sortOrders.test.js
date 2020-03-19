import React from 'react'
import {
    sortByItemCount,
    sortByItemNames,
    sortByDate,
    sortOrders,
    getSortFunction,
    sortTypes,
} from './sortOrders';


describe('sortByItemCount function', () => {
    it('orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('first not object', () => {

        const order1 = 1;

        const order2 = {
            items: ['2', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('second not object', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = 1;

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('items not passed first order', () => {

        const order1 = {
            items: undefined,
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('items not passed second order', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = {
            items: undefined,
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(0);
    });

    it('first less', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = {
            items: ['1', '2', '3'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(-1);
    });

    it('second less', () => {

        const order1 = {
            items: ['1', '2', '3'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);

        expect(result).toBe(1);
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


describe('sortByDate function', () => {
    it('orders are null', () => {
        const result = sortByItemNames(null, null);
        expect(result).toEqual(0);
    });

    it('first not object', () => {

        const order1 = 1;

        const order2 = {
            items: ['2', '2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

    it('second not object', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = 1;

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

    it('items not passed first order', () => {

        const order1 = {
            items: undefined,
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

    it('items not passed second order', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = {
            items: undefined,
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

    it('first less', () => {
        const order1 = {
            items: [1, 2],
        };

        const order2 = {
            items: [2, 1],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(1);
    });

    it('second less', () => {
        const order1 = {
            items: [2, 1],
        };

        const order2 = {
            items: [1, 2],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(-1);
    });

    it('equal', () => {
        const order1 = {
            items: [1, 2],
        };

        const order2 = {
            items: [1, 2],
        };

        const result = sortByItemNames(order1, order2);

        expect(result).toBe(0);
    });

});


describe('sortByDate function', () => {
    it('orders are null', () => {
        const result = sortByDate(null, null);
        expect(result).toEqual(0);
    });

    it('first not object', () => {

        const order1 = 1;

        const order2 = {
            items: ['2', '2'],
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

    it('second not object', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = 1;

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

    it('items not passed first order', () => {

        const order1 = {
            items: undefined,
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

    it('items not passed second order', () => {

        const order1 = {
            items: ['1', '2'],
        };

        const order2 = {
            items: undefined,
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

    it('first less', () => {
        const order1 = {
            date: new Date('December 17, 1991 03:24:00'),
        };

        const order2 = {
            date: new Date('December 17, 1995 03:24:00'),
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(1);
    });

    it('second less', () => {
        const order1 = {
            date: new Date('December 17, 1995 03:24:00'),
        };

        const order2 = {
            date: new Date('December 17, 1991 03:24:00'),
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(-1);
    });

    it('equal', () => {
        const order1 = {
            date: new Date('December 17, 1995 03:24:00'),
        };

        const order2 = {
            date: new Date('December 17, 1995 03:24:00'),
        };

        const result = sortByDate(order1, order2);

        expect(result).toBe(0);
    });

});


describe('sortOrders function', () => {
    it('empty orders given', () => {
        const result = sortOrders([], (p1, p2) => {
        });

        expect(result).toBe(undefined);
    });

    it('no orders given', () => {
        const result = sortOrders(undefined, (p1, p2) => {
        });

        expect(result).toBe(undefined);
    });

    it('no sortFunction given', () => {
        const result = sortOrders([1, 2, 3], undefined);

        expect(result).toBe(undefined);
    });

    it('sortFunction not function', () => {
        const result = sortOrders([1, 2, 3], 1);

        expect(result).toBe(undefined);
    });
});
