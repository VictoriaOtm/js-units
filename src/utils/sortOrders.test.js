import React from 'react'
import {getSortFunction, sortByDate, sortByItemCount, sortOrders, sortTypes} from './sortOrders';

describe('sortOrders function', () => {
	it('valid sort', () => {
		const mockCompare = jest.fn();

		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortOrders([order1, order2], mockCompare);
		expect(mockCompare.mock.calls.length).toBe(1);
	});

	it('empty object sort', () => {
		const mockCompare = jest.fn();

		const result = sortOrders([], mockCompare);
		expect(mockCompare.mock.calls.length).toBe(0);
	});

	it('invalid object sort', () => {
		const mockCompare = jest.fn();

		const result = sortOrders(null, mockCompare);
		expect(mockCompare.mock.calls.length).toBe(0);
	});

	test.each([
		[1],
		[null],
	])('invalid callback %i', (a) => {
		expect(() => {
			sortOrders([], a);
		}).not.toThrow();
	});
});

describe('getSort function', () => {
	it('get date sort', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});

	it('get count sort', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});

	it('get invalid key', () => {
		const result = getSortFunction(11);
		expect(result).toBeUndefined();
	});
});

describe('sortByItemCount function', () => {
	test.each([
		[1, 1, 0],
		[null, null, 0],
		[{imem: 1}, {imem: 2}, 0],
	])('invalid type or object (%i, %i)', (a, b, expected) => {
		const result = sortByItemCount(a, b);
		expect(result).toBe(0);
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

	it('first bigger then second', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('first smaller then second', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	test.each([
		[1, 1, 0],
		[null, null, 0],
		[{imem: 1}, {imem: 2}, 0],
	])('invalid type or object (%i, %i)', (a, b, expected) => {
		const result = sortByDate(a, b);
		expect(result).toBe(0);
	});

	it('same date', () => {
		const order1 = {
			date: 111,
		};

		const order2 = {
			date: 111,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first date bigger', () => {
		const order1 = {
			date: 11111,
		};

		const order2 = {
			date: 111,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('first date smaller', () => {
		const order1 = {
			date: 111,
		};

		const order2 = {
			date: 11111,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});
});

