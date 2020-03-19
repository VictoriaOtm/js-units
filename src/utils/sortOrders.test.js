import React from 'react'
import {sortByItemCount, sortByItemNames, sortByDate, sortOrders, getSortFunction} from './sortOrders';

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

	it('item 1 count < item 2 count', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1)
	});

	it('item 1 count > item 2 count', () => {
		const order1 = {
			items: ['1', 'item 2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1)
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('same items name', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});


	it('item 1 > item 2', () => {
		const order1 = {
			items: ['Notebook'],
		};

		const order2 = {
			items: ['Asos'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1)
	});

	it('item 1 < item 2', () => {
		const order1 = {
			items: ['Asos'],
		};

		const order2 = {
			items: ['Notebook'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1)
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('same items date', () => {
		const order1 = {
			date: 1544356800000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});


	it('item 1 < item 2', () => {
		const order1 = {
			date: 1544356800000,
		};

		const order2 = {
			date: 1552481120000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1)
	});

	it('item 1 > item 2', () => {
		const order1 = {
			date: 1552481120000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1)
	});
});

describe('sortOrders function', () => {
	it('orders is null', () => {
		const result = sortOrders(null, sortByItemCount())
		expect(result).toBeUndefined();
	});

	it('sortFunction is null', () => {
		const order1 = {
			items: ['1', 'item 2'],
		};

		const order2 = {
			items: ['1'],
		};

		var orders = [order1, order2];

		const result = sortOrders(orders, null)
		expect(result).toBeUndefined();
	});

	it('ok test', () => {
		const order1 = {
			items: ['1', 'item 2'],
		};

		const order2 = {
			items: ['1'],
		};

		var orders = [order1, order2];

		const sortFunction = jest.fn();
		sortOrders(orders, sortFunction);
		
		expect(sortFunction).toHaveBeenCalled();
	});
});
