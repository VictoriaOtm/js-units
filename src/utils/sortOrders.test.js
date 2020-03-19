import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames} from './sortOrders';

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

describe('sortByDate function checking params', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('order is not object', () => {
		const order1 = {
			date: Date.now(),
		};
		const result = sortByDate(order1, [1, 2]);
		expect(result).toEqual(0);
	});

	it('order doesnt have date', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};
		const order2 = {
			date: Date.now(),
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

});

describe('sortByDate function checking comparison', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});
	it('orders have same timestamp', () => {
		const timestamp = Date.now();
		const order1 = {
			date: timestamp,
		};
		const order2 = {
			date: timestamp,
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('first order is earlier', () => {
		const timestamp = Date.now();
		const order1 = {
			date: 1552481120000,
		};
		const order2 = {
			date: 1552481120001,
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(1);
	});
	it('second order is earlier', () => {
		const timestamp = Date.now();
		const order1 = {
			date: 1552481120001,
		};
		const order2 = {
			date: 1552481120000,
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(-1);
	});
});

describe('sortByItemNames function checking params', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('order is not object', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};
		const result = sortByItemNames(order1, [1, 2]);
		expect(result).toEqual(0);
	});

	it('order doesnt have items', () => {
		const timestamp = Date.now();
		const order1 = {
			date: timestamp,
		};
		const order2 = {
			date: timestamp,
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

});


describe('sortByItemNames function checking params', () => {
	it('first order should be first', () => {
		const order1 = {
			items: ['a', 'c'],
		};
		const order2 = {
			items: ['b'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(-1);
	});

	it('first order should be second', () => {
		const order1 = {
			items: ['aaa', 'c'],
		};
		const order2 = {
			items: ['a'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(1);
	});
});