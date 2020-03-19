import React from 'react'
import {sortByDate, sortByItemCount, sortByItemNames, getSortFunction, sortOrders, sortTypes} from './sortOrders';
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

	it('orders have no items', () => {
		const order1 = {
			items: [],
		};

		const order2 = {
			items: [],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 has greater number of items', () => {
		const order1 = {
			items: ['item1,', 'item2', 'item3', 'item4'],
		};

		const order2 = {
			items: ['item1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1)
	});

	it('order2 has greater number of items', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['item1,', 'item2', 'item3', 'item4'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1)
	});

	it('orders are not objects', () => {
		const result = sortByItemCount(1, 2);
		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByItemNames(1, 2);
		expect(result).toBe(0);
	});

	it('orders have no items', () => {
		const order1 = {
			items: [],
		};

		const order2 = {
			items: [],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('orders are equal', () => {
		const order1 = {
			items: ['A', 'B'],
		};

		const order2 = {
			items: ['A', 'B'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 items have greater values #1', () => {
		const order1 = {
			items: ['A', 'B'],
		};

		const order2 = {
			items: ['C', 'D'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('order1 items have greater values #2', () => {
		const order1 = {
			items: ['Broad', 'Bear', 'Beer'],
		};

		const order2 = {
			items: ['Xena', 'Xona', 'Body'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	it('order2 items have greater values', () => {
		const order1 = {
			items: ['sunny', 'sunny'],
		};

		const order2 = {
			items: ['bunny', 'bunny'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByDate function', function () {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByDate(1, 2);
		expect(result).toBe(0);
	});

	it('orders have no dates', () => {
		const order1 = {
			date: null,
		};

		const order2 = {
			date: null,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('orders have equal dates', () => {
		const myBirthDate = new Date('01.19.1998').getTime();

		const order = {
			date: myBirthDate,
		};

		const result = sortByDate(order, order);

		expect(result).toBe(0);
	});

	it('order1 date is in the past / order2 date is in the present', () => {
		const past = new Date('01.01.1945').getTime();
		const present = new Date('03.19.2020').getTime();

		const order1 = {
			date: past,
		};

		const order2 = {
			date: present,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('order1 date is in the future / order2 date is in the past', () => {
		const future = new Date('03.19.2120').getTime();
		const past = new Date('01.01.1945').getTime();

		const order1 = {
			date: future,
		};

		const order2 = {
			date: past,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('getSortFunction function', () => {
	it('sortByItemNames function returning', function () {
		const result = getSortFunction(sortTypes.ITEM_NAMES);
		expect(result).toEqual(sortByItemNames);
	});

	it('sortByItemCount function returning', function () {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});

	it('sortByDate function returning', function () {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});
});

describe('sortOrders function', () => {
	it('orders is null', () => {
		const mockComparator = jest.fn();
		sortOrders(null, mockComparator);
		expect(mockComparator).not.toBeCalled();
	});

	it('orders is empty', () => {
		const mockComparator = jest.fn();
		sortOrders([], mockComparator);
		expect(mockComparator).not.toBeCalled();
	});

	it('valid orders and comparator', function () {
		const mockComparator = jest.fn();
		sortOrders(fakeOrders, mockComparator);
		expect(mockComparator).toBeCalled();
	});

	it('comparator is null', function () {
		const someOrders = fakeOrders;
		const expected = someOrders;
		sortOrders(fakeOrders, null);
		expect(someOrders).toBe(expected);
	});
});
