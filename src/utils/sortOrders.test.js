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
		const firstOrder = { 
			items: ['first', 'second'],
		};
		const secondOrder = {
			items: ['1', '2'],
		};

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
		const res = sortOrders(null, sortFunctionMock);
		expect(res).toBeUndefined();
	})

	it('HaveNotBeenCalledBecauseOfSortFunctionNull', () => {

		const res = sortOrders(fakeOrders, null);
		expect(res).toBeUndefined();
	})

	it('HaveNotBeenCalledBecauseOfSortFunctionUndefined', () => {
		const res = sortOrders(fakeOrders, {});
		expect(res).toBeUndefined();
	})

	it('HaveNotBeenCalledBecauseOfEmptyArray', () => {
		const res = sortOrders([], sortFunctionMock);
		expect(res).toBeUndefined();
	})

})

describe('getSortFunction', () => {

		it('getSortByItemCount', () => {
			const res = getSortFunction('count')
			expect(res).toBe(sortByItemCount)
		})
	
		it('getSortByDate', () => {
			const res = getSortFunction('date')
			expect(res).toBe(sortByDate)
		})
	
		it('getNothing', () => {
			const res = getSortFunction('bullshit')
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
        const order1 = {
			date: 1
		};

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
	it('Orders are not empty', () => {
		const res = sortByDate({},{})
        expect(res).toBe(0)
	})

    it('Second bigger than first', () => {
        const order1 = {
            date: 1
        }

        const order2 = {
			date: 2
		}

        const res = sortByDate(order1, order2)
        expect(res).toBe(1)
    })

    it('First bigger than second', () => {
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
