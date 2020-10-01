import React from 'react'
import {sortByItemCount, sortOrders, sortByDate, sortTypes, getSortFunction} from './sortOrders';
import {sortFunctionMock} from "../mock/sortFunction";
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

    it('not objects', () => {
        const res = sortByItemCount(1,2)
        expect(res).toBe(0)
    })

    it('empty item set', () => {
        const res = sortByItemCount({}, {})
        expect(res).toBe(0)
    })

    it('first items count less than second item count', () => {
        const order1 = {
            items: ['item1']
        }

        const order2 = {
            items: ['1', '2', '3']
        }

        const res = sortByItemCount(order1, order2)
        expect(res).toBe(-1)
    })

    it('first items count more than second item count', () => {
        const order1 = {
            items: ['1', '2', '3']
        }

        const order2 = {
            items: ['item1']
        }


        const res = sortByItemCount(order1, order2)
        expect(res).toBe(1)
    })
});


describe('sortOrders', () => {
    afterEach(() => {
        jest.resetAllMocks()
    })

    it('sort function are called', () => {
        sortOrders(fakeOrders, sortFunctionMock)
		expect(sortFunctionMock).toHaveBeenCalled()
	})

    it('no order param', () => {
        const res = sortOrders(null, sortFunctionMock)
        expect(res).toBeUndefined()
    })

    it('no func param', () => {
        const res = sortOrders(fakeOrders, null)
        expect(res).toBeUndefined()
    })

    it('no params', () => {
        const res = sortOrders(null, null)
        expect(res).toBeUndefined()
    })

    it('empty array', () => {
        let mass = []
        const res = sortOrders(mass, sortFunctionMock)
        expect(mass).toStrictEqual([])
        expect(res).toBeUndefined()
    })

    it('sortFunc is not a func', () => {
        const res = sortOrders(fakeOrders, {})
        expect(res).toBeUndefined()
    })
});

describe('getSortFunc', () => {
    it('getSortByItemCount', () => {
        const res = getSortFunction(sortTypes.COUNT)
        expect(res).toBe(sortByItemCount)
    })

    it('getSortByDate', () => {
        const res = getSortFunction(sortTypes.DATE)
        expect(res).toBe(sortByDate)
    })

    it('getNothing', () => {
        const res = getSortFunction(null)
        expect(res).toBeUndefined()
    })
})

describe('sortByDate function', () => {
    it('orders are null', () => {
        const result = sortByDate(null, null);
        expect(result).toEqual(0);
    });

    it('same items count', () => {
        const order1 = {
            date: 1
        };

        const order2 = {
            date: 1
        };

        const result = sortByDate(order1, order2);
        expect(result).toBe(0);
    });

    it('not objects', () => {
        const res = sortByDate(1,2)
        expect(res).toBe(0)
    })

    it('empty item set', () => {
        const order1 = {}
        const order2 = {}
        const res = sortByDate(order1, order2)
        expect(res).toBe(0)
    })

    it('first date less than second date count', () => {
        const order1 = {
            date: 1
        }

        const order2 = {
            date: 2
        }

        const res = sortByDate(order1, order2)
        expect(res).toBe(1)
    })

    it('first items count more than second item count', () => {
        const order1 = {
            date: 2
        }

        const order2 = {
            date: 1
        }

        const res = sortByDate(order1, order2)
        expect(res).toBe(-1)
    })
});

