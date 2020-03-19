import React from 'react'
import {sortTypes, sortOrders, getSortFunction, sortByItemCount, sortByItemNames, sortByDate} from './sortOrders';
import { fakeOrders } from '../mock/fakeOrders';

describe('sortOrders function', () => {
	it('orders are null, sortFunction is null', () => {
		const result = sortOrders(null, null);
		expect(result).toBeUndefined();
	});

	it('orders are valid, sortFunction not a function', () => {
		const result = sortOrders(fakeOrders, {});
		expect(result).toBeUndefined();
	});

	it('orders are null, sortFunction is valid', () => {
		const fakeFunc = jest.fn();

		sortOrders(null, fakeFunc);

		expect(fakeFunc).not.toBeCalled();
	});

	it('orders and sortFunction are valid', () => {
		const fakeFunc = jest.fn();

		sortOrders(fakeOrders, fakeFunc);

		expect(fakeFunc).toBeCalled();
	});
});

describe('getSortFunction function', () => {
	it('sortType is valid', () => {
		const result = getSortFunction(sortTypes.COUNT);

		expect(result).toBeDefined();
	});

	it('sortType is invalid', () => {
		const result = getSortFunction(undefined);

		expect(result).toBeUndefined();
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('same item names', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('order1 has more items', () => {
		const order1 = {
			items: ['a', 'b'],
		};

		const order2 = {
			items: ['a'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('order1 has less items', () => {
		const order1 = {
			items: ['a'],
		};

		const order2 = {
			items: ['a', 'b'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('order1 is less than order2', () => {
		const order1 = {
			items: ['a', 'b'],
		};

		const order2 = {
			items: ['c', 'd'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('order1 is bigger than order2', () => {
		const order1 = {
			items: ['c', 'd'],
		};
		
		const order2 = {
			items: ['a', 'b'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
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

	it('order1 is less than order2', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('order1 is bigger than order2', () => {
		const order1 = {
			items: ['1', '2'],
		};
		
		const order2 = {
			items: ['item1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same date', () => {
		const timestamp = new Date('March 19, 2020 22:00:00').getTime();

		const order1 = {
			date: timestamp,
		};

		const order2 = {
			date: timestamp,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('order1 is bigger than order2 ', () => {
		const order1 = {
			date: new Date('March 19, 2020 21:59:59').getTime()
		};

		const order2 = {
			date: new Date('March 19, 2020 22:00:00').getTime()
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('order1 is less than order2 ', () => {
		const order1 = {
			date: new Date('March 19, 2020 22:00:00').getTime()
		};
		
		const order2 = {
			date: new Date('March 19, 2020 21:59:59').getTime()
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});
});