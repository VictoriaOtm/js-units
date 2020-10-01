import React from 'react'
import {getSortFunction, sortByDate, sortByItemCount, sortTypes, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByItemCount(1, 2);
		expect(result).toEqual(0);
	})

	it('orders are empty objects', () => {
		const result = sortByItemCount({}, {});
		expect(result).toEqual(0);
	})

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

	it.each([
		[{items: ['item1', 'item2']}, {items: ['item1', 'item2', 'item3']}, -1],
		[{items: ['item1', 'item2', 'item3']}, {items: ['item1', 'item2']}, 1],
	])('test normal behavior', (a, b, expected) => {
		const result = sortByItemCount(a, b);

		expect(result).toBe(expected);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByDate(1, 2);
		expect(result).toEqual(0);
	})

	it('orders are empty objects', () => {
		const result = sortByDate({}, {});
		expect(result).toEqual(0);
	})

	it.each([
		[{date: 100}, {date: 200}, 1],
		[{date: 200}, {date: 100}, -1],
		[{date: 100}, {date: 100}, 0],
	])('test normal behavior', (a, b, expected) => {
		const result = sortByDate(a, b);

		expect(result).toBe(expected);
	});
});

describe('sortOrders function', () => {
	it('orders empty array', () => {
		const fakeSort = jest.fn();
		sortOrders([], fakeSort);

		expect(fakeSort).toHaveBeenCalledTimes(0);
	})

	it('sort function is not a function', () => {
		const result = sortOrders([{}, {}], 123);

		expect(result).toBeUndefined();
	})
});