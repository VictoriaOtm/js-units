import React from 'react'
import {
	sortTypes,
	sortOrders,
	getSortFunction,
	sortByItemCount,
	sortByDate
} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByItemCount(1, 1);
		expect(result).toBe(0);
	});

	it('orders have no item', () => {
		const result = sortByItemCount({ lol: 'kek' }, { kek: 'lol' });
		expect(result).toBe(0);
	});

	it('first order has less items', () => {
		const order1 = {
			items: ['topkek'],
		};
		const order2 = {
			items: ['lol', 'kek'],
		};
		const result = sortByItemCount(order1, order2);
		expect(result).toBe(-1);
	});

	it('second order has less items', () => {
		const order1 = {
			items: ['lol', 'kek'],
		};
		const order2 = {
			items: ['topkek'],
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
		const result = sortByDate(null, null);
		expect(result).toBe(0);
	});

	it('orders are not objects', () => {
		const result = sortByDate(1, 1);
		expect(result).toBe(0);
	});

	it('orders have no date', () => {
		const result = sortByDate({ lol: 'kek' }, { kek: 'lol' });
		expect(result).toBe(0);
	});

	it('first order\'s date is less', () => {
		const order1 = { date: 1 };
		const order2 = { date: 2 };
		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});

	it('second order\'s date is less', () => {
		const order1 = { date: 2 };
		const order2 = { date: 1 };
		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	});

	it('orders with same date', () => {
		const order1 = { date: 1 };
		const order2 = { date: 1 };
		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});
});

describe('getSortFunction function', () => {
	it('date', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});

	it('count', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});

	it('empty string', () => {
		const result = getSortFunction('');
		expect(result).toBeUndefined();
	});
});

describe('sortOrders function', () => {
	it('null orders', () => {
		const fakeSortFunction = jest.fn();
		const result = sortOrders(null, fakeSortFunction);
		expect(fakeSortFunction).toHaveBeenCalledTimes(0);
		expect(result).toBeUndefined();
	});

	it('orders without length', () => {
		const fakeSortFunction = jest.fn();
		const result = sortOrders({ lol: 'kek' }, fakeSortFunction);
		expect(fakeSortFunction).toHaveBeenCalledTimes(0);
		expect(result).toBeUndefined();
	});

	it('no sort function', () => {
		const result = sortOrders({ length: 'kek' });
		expect(result).toBeUndefined();
	});

	it('sort is not function', () => {
		const result = sortOrders({ length: 'kek' }, 1);
		expect(result).toBeUndefined();
	});

	it('sort function is called', () => {
		const fakeSortFunction = jest.fn();
		const result = sortOrders([ 'lol', 'kek' ], fakeSortFunction);
		expect(fakeSortFunction).toHaveBeenCalled();
		expect(result).toBeUndefined();
	});
});
