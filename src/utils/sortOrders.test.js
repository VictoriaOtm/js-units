import React from 'react'
import {
	sortTypes,
	sortOrders,
	getSortFunction,
	sortByItemCount,
	sortByDate
} from './sortOrders';

describe('sortByItemCount function', () => {
	it.each([
		[null, null, 0],
		[1, 1, 0],
		[{ lol: 'kek' }, { kek: 'lol' }, 0],
		[{ items: ['topkek'] }, { items: ['lol', 'kek'] }, -1],
		[{ items: ['lol', 'kek'] }, { items: ['topkek'] }, 1],
		[{ items: ['item1', 'item2'] }, { items: ['1', '2'] }, 0],
	])('sortByItemCount(%p %p) => %i', (a, b, expected) => {
		const result = sortByItemCount(a, b);
		expect(result).toBe(expected);
	});
});

describe('sortByDate function', () => {
	it.each([
		[null, null, 0],
		[1, 1, 0],
		[{ lol: 'kek' }, { kek: 'lol' }, 0],
		[{ date: 1 }, { date: 2 }, 1],
		[{ date: 2 }, { date: 1 }, -1],
		[{ date: 1 }, { date: 1 }, 0],
	])('sortByDate(%p %p) => %i', (a, b, expected) => {
		const result = sortByDate(a, b);
		expect(result).toBe(expected);
	});
});

describe('getSortFunction function', () => {
	it.each([
		[sortTypes.DATE, sortByDate],
		[sortTypes.COUNT, sortByItemCount],
		['', undefined],
	])('getSortFunction(%s) => %o', (a, expected) => {
		const result = getSortFunction(a);
		expect(result).toBe(expected);
	});
});

describe('sortOrders function', () => {
	it('null orders', () => {
		const fakeSortFunction = jest.fn();
		const result = sortOrders(null, fakeSortFunction);
		expect(fakeSortFunction).toHaveBeenCalledTimes(0);
	});

	it('orders without length', () => {
		const fakeSortFunction = jest.fn();
		const result = sortOrders({ lol: 'kek' }, fakeSortFunction);
		expect(fakeSortFunction).toHaveBeenCalledTimes(0);
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
	});
});
