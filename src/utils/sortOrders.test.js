import React from 'react'
import {getSortFunction, sortByDate, sortByItemCount, sortOrders, sortTypes} from './sortOrders';
import {getDate} from "./getDate";
import {fakeOrders} from "../mock/fakeOrders";

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

	test.each([
		[{items: [...Array(10).keys()]}, {items:[...Array(20).keys()]}, -1],
		[{items: [...Array(20).keys()]}, {items:[...Array(10).keys()]}, 1],
		[{items: [...Array(20).keys()]}, {items:[...Array(20).keys()]}, 0],
		[{items: null}, {items:[...Array(20).keys()]}, 0],
		[null, {items:[...Array(20).keys()]}, 0],
		[undefined, {items:[...Array(20).keys()]}, 0]

	])('.sortByItemCount(%i, %i)', (item1, item2, expected) => {
		expect(sortByItemCount(item1, item2)).toBe(expected);
	});
});

describe('sortByDate function', () => {
	it('dates are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});
	test.each([
		[{date:1552481120000}, {date:1552481130000}, 1],
		[{date:1552481130000}, {date:1552481120000}, -1],
		[{date:1552481120000}, {date:1552481120000}, 0],
		[null, {date:1552481120000}, 0],
		[{date:1552481120000}, null, 0],
		[{date:null}, {date:1552481120000}, 0],
		[{date:undefined}, {date:1552481120000}, 0],
		[undefined, {date:1552481120000}, 0],
		[{date:1552481120000}, {date:null}, 0],
	])('.sortByDate(%i, %i)', (date1, date2, expected) => {
		expect(sortByDate(date1, date2)).toBe(expected);
	});
});

describe('getDate function', () => {
	test.each([
		[1552481120000, '13 марта, ср, 2019 год'],
		[null, undefined],
	])('.getDate(%i)', (timestamp, expected) => {
		expect(getDate(timestamp)).toBe(expected);
	});
});

describe('getSortFunction function', () => {
	test.each([
		[sortTypes.DATE, sortByDate],
		[sortTypes.COUNT, sortByItemCount],
		[null, undefined],
	])('.getSortFunction(%i)', (type, expected) => {
		expect(getSortFunction(type)).toBe(expected);
	});
});

describe('sortOrders function', () => {

	it('if orders are null, callback is not called', function () {
		const cb = jest.fn();
		sortOrders(null, cb);
		expect(cb).not.toBeCalled();
	});

	it('should call callback', function () {
		const cb = jest.fn();
		sortOrders(fakeOrders, cb);
		expect(cb).toBeCalled();
	});

	it('if callback is null, items are not changed', function () {
		const items = ['a', 'b', 'c'];
		const itemsToBeChanged = items.slice(0);
		sortOrders(itemsToBeChanged, null);
		expect(itemsToBeChanged).toEqual(items);
	});

	test.each([
		[fakeOrders, jest.fn(sortByDate) , undefined],
	])('.sortOrders(%i)', (orders, func, expected) => {
		expect(sortOrders(orders, func)).toBe(expected);
	});
});




