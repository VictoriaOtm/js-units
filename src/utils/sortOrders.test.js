import React from 'react'
import {sortByItemCount, sortByDate, sortByItemNames, sortOrders} from './sortOrders';
import {fakeOrders} from "../mock/fakeOrders";

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});
	it('orders are not objects', () => {
		const result = sortByItemCount(1111, 1111);
		expect(result).toEqual(0);
	});
	it('orders have not got items', () => {
		const order1 = {
			date: 11111,
		};

		const order2 = {
			date: 11111,
		};

		const result = sortByItemCount(order1, order2);
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

	it('first count bigger', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});
	it('second count bigger', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByDate(1111, 1111);
		expect(result).toEqual(0);
	});

	it('orders have not got attribute date', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('same items date', () => {
		const order1 = {
			date: 100000000000,
		};

		const order2 = {
			date: 100000000000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('first date bigger', () => {
		const order1 = {
			date: 1000000000000,
		};

		const order2 = {
			date: 100000000000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});

	it('second item bigger', () => {
		const order1 = {
			date: 100000000000,
		};

		const order2 = {
			date: 1000000000000,
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('orders are not objects', () => {
		const result = sortByItemNames(1111, 1111);
		expect(result).toEqual(0);
	});

	it('orders have not got items', () => {
		const order1 = {
			date: 11111,
		};

		const order2 = {
			date: 11111,
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});


	it('same items names', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item2'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('first count bigger', () => {
		const order1 = {
			items: ['item4', 'item5'],
		};

		const order2 = {
			items: ['item2', 'item3'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});

	it('second count bigger', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item2', 'item3'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortOrders function', () => {
	it('no orders', () => {
		const callback = jest.fn();
		sortOrders(null, callback);
		expect(callback).not.toBeCalled();
	});

	it('call order function', () => {
		const callback = jest.fn();
		sortOrders(fakeOrders, callback);
		expect(callback).toBeCalled();
	});
});


