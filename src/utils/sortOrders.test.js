import React from 'react'
import {sortByDate, sortByItemCount, sortOrders} from './sortOrders';

describe('sortByItemCount function', () => {
	it.each([
		[{items: [1, 2, 3, 4]}, {items: [1, 2, 3]}, 1],
		[{items: [1, 2, 3]}, {items: [1, 2, 3, 4]}, -1],
		[{items: [1, 2, 3]}, {items: [1, 2, 3]}, 0],
		[{items: null}, {items: null}, 0],
		[null, null, 0],
		['not an object', 'string', 0]
	])('sortByItems', (order1, order2, expected) => {
		const result = sortByItemCount(order1, order2);

		expect(result).toEqual(expected);
	});
});

describe('sortByItemCount function', () => {
	it.each([
		[{date: 200500}, {date: 100500}, -1],
		[{date: 111111}, {date: 999999}, 1],
		[{date: 555555}, {date: 555555}, 0],
		[{date: null}, {date: null}, 0],
		[null, null, 0],
		['not an object', 'string', 0]
	])('sortByDate', (order1, order2, expected) => {
		const result = sortByDate(order1, order2);

		expect(result).toEqual(expected);
	});
});

describe('sortOrders', () => {
	it('sortOrders() calls sortFunction()', () => {
		const sortFunction = jest.fn((a, b) => -1);
		sortOrders([1, 2], sortFunction);
		expect(sortFunction).toBeCalled();
	});
});
