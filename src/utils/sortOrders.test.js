import React from 'react'
import { fakeOrders } from '../mock/fakeOrders';
import {sortByItemCount, sortOrders, sortByDate, sortTypes, getSortFunction} from './sortOrders';

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


describe('sortOrders function tests', () => {
    let sortFunctionMock;

    beforeEach(() => {
        sortFunctionMock = jest.fn(() => {true});
    });

    afterEach(() => {
        jest.resetAllMocks();
    })

    it('sortFunctionMock calls with data', () => {
        sortOrders(fakeOrders, sortFunctionMock);
        expect(sortFunctionMock).toHaveBeenCalled();
    });

    it('work with data=[] and normal sortFunction', () => {
        const data = []
        const res = sortOrders(data, sortFunctionMock);
        expect(data.length).toStrictEqual(0);
        expect(res).toBeUndefined();
    });

    it('works with data=null and normalSortFunction', () => {
        const res = sortOrders(null, sortFunctionMock);
        expect(res).toBeUndefined();        
    });

    it('works with invalid sortFunction=null', () => {
        const res = sortOrders(fakeOrders, null);
        expect(res).toBeUndefined();
    });

    it('works with invalid sortFunction={}', () => {
        const res = sortOrders(fakeOrders, {});
        expect(res).toBeUndefined();
    });
});

describe('getSortFunction function tests', () => {
    it('sortTypes.DATE ==> sortByDate', () => {
        const res = getSortFunction(sortTypes.DATE);
        expect(res).toBe(sortByDate);
    });

    it('sortTypes.COUNT ==> sortByItemCount', () => {
        const res = getSortFunction(sortTypes.COUNT);
        expect(res).toBe(sortByItemCount);
    });

    it('null ==> undefined', () => {
        const res = getSortFunction(null);
        expect(res).toBeUndefined();
    });
});

describe('getSortFunction function tests', () => {
    it('sortTypes.DATE ==> sortByDate', () => {
        const res = getSortFunction(sortTypes.DATE);
        expect(res).toBe(sortByDate);
    });

    it('sortTypes.COUNT ==> sortByItemCount', () => {
        const res = getSortFunction(sortTypes.COUNT);
        expect(res).toBe(sortByItemCount);
    });

    it('null ==> undefined', () => {
        const res = getSortFunction(null);
        expect(res).toBeUndefined();
    });
});

describe('sortByDate function tests', () => {
    const orderBigDate = {
        date: 10000,
    };

    const orderLittleDate = {
        date: 10,
    };

    it('sortByDate(orderBigDate, orderLittleDate) ==> -1', () => {
        const res = sortByDate(orderBigDate, orderLittleDate);
        expect(res).toStrictEqual(-1);
    });

    it('sortByDate(orderLittleDate, orderBigDate) ==> 1', () => {
        const res = sortByDate(orderLittleDate, orderBigDate);
        expect(res).toStrictEqual(1);
    });

    it('sortByDate(orderLittleDate, orderLittleDate) ==> 0', () => {
        const res = sortByDate(orderLittleDate, orderLittleDate);
        expect(res).toStrictEqual(0);
    });

    it('sortByDate({}, orderLittleDate) ==> 0', () => {
        const res = sortByDate({}, orderLittleDate);
        expect(res).toStrictEqual(0);
    });

    it('sortByDate(orderLittleDate, {}) ==> 0', () => {
        const res = sortByDate(orderLittleDate, {});
        expect(res).toStrictEqual(0);
    });

    it('sortByDate(null, orderLittleDate) ==> 0', () => {
        const res = sortByDate(null, orderLittleDate);
        expect(res).toStrictEqual(0);
    });

    it('sortByDate(orderLittleDate, null) ==> 0', () => {
        const res = sortByDate(orderLittleDate, null);
        expect(res).toStrictEqual(0);
    });

    it('sortByDate(1, orderLittleDate) ==> 0', () => {
        const res = sortByDate(1, orderLittleDate);
        expect(res).toStrictEqual(0);
    });

    it('sortByDate(orderLittleDate, 1) ==> 0', () => {
        const res = sortByDate(orderLittleDate, 1);
        expect(res).toStrictEqual(0);
    });
});

describe('sortByItemCount function tests', () => {
    it('sortByItemCount(null, null) ==> 0', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('sortByItemCount with same items count ==> 0', () => {
        const order1 = {
            items: ['item1', 'item2'],
        };

        const order2 = {
            items: ['1', '2'],
        };

        const result = sortByItemCount(order1, order2);
        expect(result).toBe(0);
    });

    it('sortByItemCount(1, order2) ==> 0', () => {
        const order2 = {
            items: ['1', '2'],
        };

        const res = sortByItemCount(1, order2)
        expect(res).toBe(0)
    });

    it('sortByItemCount(order2, 1) ==> 0', () => {
        const order2 = {
            items: ['1', '2'],
        };

        const res = sortByItemCount(order2, 1)
        expect(res).toBe(0)
    });


    it('sortByItemCount(order2, {}) ==> 0', () => {
        const order2 = {
            items: ['1', '2'],
        };

        const res = sortByItemCount(order2, {})
        expect(res).toBe(0)
    });

    it('sortByItemCount({}, order2) ==> 0', () => {
        const order2 = {
            items: ['1', '2'],
        };

        const res = sortByItemCount({}, order2)
        expect(res).toBe(0)
    });

    it('sortByItemCount, where first items count less than second item count ==> -1', () => {
        const order1 = {
            items: ['item1']
        }

        const order2 = {
            items: ['1', '2', '3']
        }

        const res = sortByItemCount(order1, order2)
        expect(res).toBe(-1)
    })

    it('sortByItemCount, where first items count greater than second item count ==> 1', () => {
        const order1 = {
            items: ['1', '2', '3']
        }

        const order2 = {
            items: ['item1']
        }
        
        const res = sortByItemCount(order1, order2)
        expect(res).toBe(1)
    });
});
