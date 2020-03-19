import React from 'react'
import {sortByItemCount, sortByDate, sortByItemNames, getSortFunction, sortTypes} from './sortOrders';

describe('getSortFunction function', () => {
	it('sortByDate', function () {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});

	it('sortByItemCount', function () {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});

	it('sortByItemNames', function () {
		const result = getSortFunction(sortTypes.ITEM_NAMES);
		expect(result).toEqual(sortByItemNames);
	});
});

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

describe('sortByDate function', () => {
	it('typeof order1 !== \'object\'', () => {
		const result = sortByDate(null, null);
		expect(result).toBe(0);
	});

	it('!order1 || !order2', () => {
		const result = sortByDate();
		expect(result).toBe(0);
	});

	it('two dates equal', () => {
		const result = sortByDate(Date.now(),Date.now());
		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('names are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('names are nothing', () => {
		const result = sortByItemNames();
		expect(result).toEqual(0);
	});

	it('same items name', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item1'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});
});

