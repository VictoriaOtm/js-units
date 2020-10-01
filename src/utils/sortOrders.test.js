import React from 'react'
import {sortByItemCount, sortOrders, getSortFunction, sortTypes} from './sortOrders';
import { fakeOrders } from '../mock/fakeOrders';
import { sortFunctionMock } from '../mock/fakeSortFunction';
import { sortByDate } from './sortOrders'

describe('sortByItemCount function', () => {
	it('Null orders', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('Equal count items', () => {
		const firstOrder = { items: ['first', 'second'],};
		const secondOrder = {items: ['1', '2'],};

		const result = sortByItemCount(firstOrder, secondOrder);

		expect(result).toBe(0);
	});
});

describe('sordOrders', () => {
	beforeEach(() => {
		sortFunctionMock.mockClear();
	})

	it('HaveBeenCalled', () => {
		sortOrders(fakeOrders, sortFunctionMock);
		expect(sortFunctionMock).toHaveBeenCalled();
	  });

	it('HaveNotBeenCalledBecauseOfOrders', () => {
		sortOrders(null, sortFunctionMock);
		expect(sortFunctionMock).not.toBeUndefined();
	})

	it('HaveNotBeenCalledBecauseOfSortFunctionNull', () => {
		sortOrders(fakeOrders, null);
		expect(sortFunctionMock).not.toBeUndefined();
	})

	it('HaveNotBeenCalledBecauseOfSortFunctionUndefined', () => {
		sortOrders(fakeOrders, {});
		expect(sortFunctionMock).not.toBeUndefined();
	})

	it('HaveNotBeenCalledBecauseOfEmptyArray', () => {
		const orders = []
		sortOrders(orders, sortFunctionMock);
		expect(sortFunctionMock).not.toBeUndefined();
	})

})

describe('getSortFunction', () => {

		it('getSortByItemCount', () => {
			const sortType = 'count';
			const res = getSortFunction(sortType)
			expect(res).toBe(sortByItemCount)
		})
	
		it('getSortByDate', () => {
			const sortType = 'date';
			const res = getSortFunction(sortType)
			expect(res).toBe(sortByDate)
		})
	
		it('getNothing', () => {
			const sortType = 'bullshit';
			const res = getSortFunction(sortType)
			expect(res).toBeUndefined()
		})
})

describe('sortByItemCount function', () => {
    it('Orders are null', () => {
        const result = sortByItemCount(null, null);
        expect(result).toEqual(0);
    });

    it('Orders are not objects', () => {
        const res = sortByItemCount(1,2)
        expect(res).toBe(0)
    })

    it('Orders are empty', () => {
        const res = sortByItemCount({}, {})
        expect(res).toBe(0)
    })

    it('Second count bigger than first', () => {
        const order1 = {
            items: ['item1']
        }

        const order2 = {
            items: ['1', '2', '3']
        }

        const res = sortByItemCount(order1, order2)
        expect(res).toBe(-1)
    })

    it('First count bigger than second', () => {
        const order1 = {
            items: ['1', '2', '3']
        }

        const order2 = {
            items: ['item1']
        }


        const res = sortByItemCount(order1, order2)
        expect(res).toBe(1)
	})
	
	it('Equal counts of items', () => {
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
    it('Orders are null', () => {
        const result = sortByDate(null, null);
        expect(result).toEqual(0);
    });

    it('Equal counts of items', () => {
        const order1 = {date: 1};

        const order2 = {
            date: 1
        };

        const result = sortByDate(order1, order2);
        expect(result).toBe(0);
    });

    it('Orders are not objects', () => {
        const res = sortByDate(1,2)
        expect(res).toBe(0)
    })

    it('Second bigger than first', () => {
        const order1 = {
            date: 1
        }

        const order2 = {date: 2}

        const res = sortByDate(order1, order2)
        expect(res).toBe(1)
    })

    it('First bigger than second', () => {
        const order1 = {date: 2}

        const order2 = {date: 1}

        const res = sortByDate(order1, order2)
        expect(res).toBe(-1)
    })
});
