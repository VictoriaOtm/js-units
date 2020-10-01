import React from 'react'
import {sortByItemCount, sortByDate, sortOrders} from './sortOrders';
import {fakeOrders} from "../mock/fakeOrders";

describe('sortByItemCount function', () => {
	test.each([
		['order1', 'order2'],
		[null, null],
		[{}, {}],
		[{items: []}, {items: []}],
		[{items: ['1', '2']}, {items: ['1', '2']}],
	])('equal', (order1, order2) => {
		expect(sortByItemCount(order1, order2)).toBe(0);
	})

	it('first less than second', () => {
		const order1 = {
			items: ['1']
		};
		const order2 = {
			items: ['1', '2']
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	})

	it('first more than second', () => {
		const order1 = {
			items: ['1', '2']
		};
		const order2 = {
			items: ['1']
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	})
});

describe('sortByDate function', () => {
	test.each([
		['order1', 'order2'],
		[null, null],
		[{}, {}],
		[{date: 1}, {date: 1}],
	])('equal', (order1, order2) => {
		expect(sortByDate(order1, order2)).toBe(0);
	})

	it('first less than second', () => {
		const order1 = {
			date: 1
		};
		const order2 = {
			date: 2
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	})

	it('first more than second', () => {
		const order1 = {
			date: 2
		};
		const order2 = {
			date: 1
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	})
})

describe('sortOrders function', () => {
	let fakeSortFunction;

	beforeEach(() => {
		fakeSortFunction = jest.fn();
	})

	afterEach(() => {
		fakeSortFunction.mockReset();
	})

	it('sortFunction call', () => {
		sortOrders(fakeOrders, fakeSortFunction);

		expect(fakeSortFunction).toHaveBeenCalled();
	})

	it('no orders', () => {
		sortOrders([], fakeSortFunction);

		expect(fakeSortFunction).toHaveBeenCalledTimes(0)
	})

	it('sortFunction is not a function', () => {
		expect(() => {
			sortOrders(fakeOrders, 'sortFunction');
		}).not.toThrow()
	})
})

