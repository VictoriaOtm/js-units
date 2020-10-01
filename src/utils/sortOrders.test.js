import React from 'react'
import {sortByItemCount, sortTypes} from './sortOrders';
import {sortOrders} from "./sortOrders";
import {getSortFunction} from "./sortOrders";
import {sortByDate} from "./sortOrders";

describe('sortByItemCount', () => {
	it.each([
		[undefined, undefined, 0],
		[null, null, 0],
		[1, 2, 0],
	])('negative: %i %i', (ord1, ord2, expected) => {
		expect(sortByItemCount(ord1, ord2)).toBe(expected);
	})

	it.each([
		[{items: ['item1', 'item2']}, {items: ['item1', 'item2']}, 0],
		[{items: ['item1']}, {items: ['item1', 'item2']}, -1],
		[{items: ['item1', 'item2']}, {items: ['item2']}, 1],
	])('positive: %i %i', (ord1, ord2, expected) => {
		expect(sortByItemCount(ord1, ord2)).toBe(expected);
	})
});

describe('sortByDate', () => {
	it.each([
		[undefined, undefined, 0],
		[null, null, 0],
		[1, 2, 0],
		[{date: null}, {date: null}, 0],
	])('negative: %i %i', (ord1, ord2, expected) => {
		expect(sortByDate(ord1, ord2)).toBe(expected);
	})

	it.each([
		[{date: 1}, {date: 2}, 1],
		[{date: 2}, {date: 2}, 0],
		[{date: 2}, {date: 1}, -1],
	])('positive: %i %i', (ord1, ord2, expected) => {
		expect(sortByDate(ord1, ord2)).toBe(expected);
	})
});

describe('sortOrders', () => {
	const simpleStub = jest.fn((l, r) => l - r);
	let stubOrderFunc = simpleStub;
	beforeEach(() => {
		stubOrderFunc = simpleStub;
	})
	afterEach(() => {
		stubOrderFunc.mockClear();
	})

	it.each([
		[undefined],
		[null],
		[[]],
	])('negative: %i', (arr) => {
		sortOrders(arr, stubOrderFunc);
		expect(stubOrderFunc).not.toBeCalled();
	})

	it.each([
		[[3, 2, 1], [1, 2, 3]],
		[[1, 1, 1], [1, 1, 1]],
	])('positive: %i', (arr, expected) => {
		sortOrders(arr, stubOrderFunc);
		expect(stubOrderFunc).toBeCalled();
		expect(arr).toStrictEqual(expected);
	})
});

describe('getSortFunction', () => {
	it.each([
		[undefined, undefined],
		[null, undefined],
	])('negative: %i', (type, expected) => {
		expect(getSortFunction(type)).toBe(expected);
	})

	it.each([
		[sortTypes.COUNT, 'sortByItemCount'],
		[sortTypes.DATE, 'sortByDate'],
	])('positive: %i', (type, expected) => {
		expect(getSortFunction(type).name).toBe(expected);
	})
});
