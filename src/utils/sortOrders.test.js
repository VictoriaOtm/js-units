import React from 'react'
import {sortByItemCount, sortByDate, sortByItemNames, getSortFunction, sortTypes, sortOrders} from './sortOrders';
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
});

describe('sortOrders function', () => {
	it('should call callback', function () {
		const cb = jest.fn();

		sortOrders(fakeOrders, cb);

		expect(cb).toBeCalled();
	});
});

describe('getSortFunction function', () => {
	it('should return sortByItemCount', function () {
		const result = getSortFunction(sortTypes.COUNT);

		expect(result).toEqual(sortByItemCount);
	});

	it('should return sortByItemNames', function () {
		const result = getSortFunction(sortTypes.ITEM_NAMES);

		expect(result).toEqual(sortByItemNames);
	});

	it('should return sortByDate', function () {
		const result = getSortFunction(sortTypes.DATE);

		expect(result).toEqual(sortByDate);
	});
});


describe('sortByItemNames function', () => {
	it('same name ', function () {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 > order2 ', function () {
		const order1 = {
			items: ['a', 'a'],
		};

		const order2 = {
			items: ['b', 'b'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});
});


describe('sortByDate function', () => {
	it('same date ', function () {
		const order1 = {
			date: new Date('03.19.2020').getTime(),
		};

		const order2 = {
			date: new Date('03.19.2020').getTime(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 is older than order2 ', function () {
		const order1 = {
			date: new Date('03.18.2020').getTime(),
		};

		const order2 = {
			date: new Date('03.19.2020').getTime(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('order2 is older than order1 ', function () {
		const order1 = {
			date: new Date('03.19.2020').getTime(),
		};

		const order2 = {
			date: new Date('03.18.2020').getTime(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});
});
