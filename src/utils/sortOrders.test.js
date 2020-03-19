import React from 'react'
import {sortByItemCount} from './sortOrders';
import {sortByItemNames} from './sortOrders';
import {sortByDate} from './sortOrders';


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

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('same items`s names', () => {
		const order1 = {
			items: ['itemB', 'itemB'],
		};

		const order2 = {
			items: ['itemB', 'itemB'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('first order`s items` names are bigger', () => {
		const order1 = {
			items: ['itemB', 'itemB'],
		};

		const order2 = {
			items: ['itemA', 'itemB'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('second order`s names are bigger', () => {
		const order1 = {
			items: ['itemA', 'itemB'],
		};

		const order2 = {
			items: ['itemB', 'itemB'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('first order is shorter', () => {
		const order1 = {
			items: ['itemB'],
		};

		const order2 = {
			items: ['itemB', 'itemB'],
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

	it('orders` dates are equal', () => {
		const order1 = {
			items: {item: 'item1', date: Date.now()},
		};

		const order2 = {
			items: {item: 'item2', date: Date.now()},
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first order`s date is bigger', () => {
		const order1 = {
			items: 'item1', date: Date.now() + 100500,
		};

		const order2 = {
			item: 'item2', date: Date.now(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('first order`s date is smaller', () => {
		const order1 = {
			items: 'item1', date: Date.now(),
		};

		const order2 = {
			item: 'item2', date: Date.now() + 2020,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('second order has no date', () => {
		const order1 = {
			items: 'item1', date: Date.now(),
		};

		const order2 = {
			item: 'item2',
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});