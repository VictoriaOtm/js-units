import React from 'react'
import * as pkg from './sortOrders';

function testInvalidOrders(func) {
	it('1st order is null', () => {
		expect(func(null, {})).toBe(0);
	});

	it('2nd order is null', () => {
		expect(func({}, null)).toBe(0);
	});

	it('1st order wrong instance', () => {
		expect(func('order', null)).toBe(0);
	});

	it('2nd order wrong instance', () => {
		expect(func(null, 'order')).toBe(0);
	});
}

function testHasNoItems(func) {
	it('1st order has no items', () => {
		expect(func({}, {items: []})).toBe(0);
	});

	it('2nd order has no items', () => {
		expect(func({items: []}, {})).toBe(0);
	});
}

describe('sortByItemCount function', () => {
	it('same items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = pkg.sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 > order2', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = pkg.sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('order1 < order2', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = pkg.sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	testInvalidOrders(pkg.sortByItemCount);
	testHasNoItems(pkg.sortByItemCount);
});

describe('sortByDate function', () => {
	it('same date', () => {
		const order1 = {
			date: 1_000_000,
		};

		const order2 = {
			date: 1_000_000,
		};

		const result = pkg.sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 is older', () => {
		const order1 = {
			date: Date.UTC(2009, 1, 24),
		};

		const order2 = {
			date: Date.UTC(2010, 1, 24),
		};

		const result = pkg.sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('order2 is older', () => {
		const order1 = {
			date: Date.UTC(2019, 1, 24),
		};

		const order2 = {
			date: Date.UTC(2018, 1, 24),
		};

		const result = pkg.sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	testInvalidOrders(pkg.sortByDate);

	it('order1 has no date', () => {
		const order1 = {};
		const order2 = {
			date: Date.UTC(2018, 1, 24),
		};

		const result = pkg.sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('order2 has no date', () => {
		const order1 = {
			date: Date.UTC(2018, 1, 24),
		};;
		const order2 = {}

		const result = pkg.sortByDate(order1, order2);

		expect(result).toBe(0);
	});
});

describe('sortByItemNames function', () => {
	it('order1 = order2', () => {
		const order1 = {
			items: ['a', 'b', 'c'],
		};

		const order2 = {
			items: ['a', 'b', 'c'],
		};

		const result = pkg.sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('1 order > 2 order', () => {
		const order1 = {
			items: ['b', 'c'],
		};

		const order2 = {
			items: ['a', 'b', 'c'],
		};

		const result = pkg.sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('1 order < 2 order', () => {
		const order1 = {
			items: ['c', 'b', 'a'],
		};

		const order2 = {
			items: ['d', 'b', 'c'],
		};

		const result = pkg.sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});

	testInvalidOrders(pkg.sortByItemNames);
	testHasNoItems(pkg.sortByItemNames);
});

describe('getSortFunction function', () => {
	it('request for sortByDate', () => {
		expect(pkg.getSortFunction(pkg.sortTypes.DATE)).toBe(pkg.sortByDate);
	});

	it('request for sortByItemNames', () => {
		expect(pkg.getSortFunction(pkg.sortTypes.ITEM_NAMES)).toBe(pkg.sortByItemNames);
	});

	it('request for sortByItemCount', () => {
		expect(pkg.getSortFunction(pkg.sortTypes.COUNT)).toBe(pkg.sortByItemCount);
	});
});

describe('sortOrders function', () => {
	it('order list is not empty', () => {
		const callback = jest.fn();
		pkg.sortOrders([{}, {}], callback);
		expect(callback).toBeCalled();
	});

	it('order list is empty', () => {
		const callback = jest.fn();
		pkg.sortOrders([], callback);
		expect(callback).not.toBeCalled();
	});

	it('order list is null', () => {
		const callback = jest.fn();
		pkg.sortOrders(null, callback);
		expect(callback).not.toBeCalled();
	});
});