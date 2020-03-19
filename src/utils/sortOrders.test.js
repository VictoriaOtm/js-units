import React from 'react'
import { sortByItemCount, sortByItemNames, sortByDate, getSortFunction, sortTypes } from './sortOrders';

// toBe - для примитивов, toEqual - для объеков. Используется глубокое сравнение
describe('sortByItemCount function', () => {
	it('orders are not objects', () => {
		const result = sortByItemCount(2, "2");
		expect(result).toBe(0);
	});

	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toBe(0);
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

	it('order1 has more items than order2', () => {
		const order1 = {
			items: ['1', '2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('order1 has less items than order2', () => {
		const order1 = {
			items: ['1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByItemNames function', () => {
	it('orders are not objects', () => {
		const result = sortByItemNames(2, "2");
		expect(result).toBe(0);
	});

	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toBe(0);
	});

	it('order1 items less lexicographically than order2 items', () => {
		const order1 = {
			items: [
				'Ex:Re - Ex:Re CD Album',
				'Daughter - Not to Disappear CD Album'
			],
		};

		const order2 = {
			items: [
				'Porter Robinson - Worlds CD Album'
			],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('order1 items more lexicographically than order2 items', () => {
		const order1 = {
			items: [
				'Bbb',
				'Baadf'
			],
		};

		const order2 = {
			items: [
				'Aad',
				'Abb',
				'Acc',
			],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

	it('order1 items equivalent lexicographically than order2 items', () => {
		const order1 = {
			items: [
				'Aaa',
				'Aaa'
			],
		};

		const order2 = {
			items: [
				'Aaa',
				'Aaa',
			],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});
});

describe('sortByDate function', () => {
	it('orders are not objects', () => {
		const result = sortByDate(2, "2");
		expect(result).toBe(0);
	});

	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toBe(0);
	});

	it('order1 date less than order2 date', () => {
		const date1 = new Date("2020-02-25");
		const date2 = new Date("2020-02-26");

		const order1 = {
			date: date1.getTime()
		};

		const order2 = {
			date: date2.getTime()
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
	});

	it('order1 date more than order2 date', () => {
		const date1 = new Date("2020-02-26");
		const date2 = new Date("2020-02-25");

		const order1 = {
			date: date1.getTime()
		};

		const order2 = {
			date: date2.getTime()
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
	});

	it('order1 date equivalent than order2 date', () => {
		const date1 = new Date("2020-02-26");
		const date2 = new Date("2020-02-26");

		const order1 = {
			date: date1.getTime()
		};

		const order2 = {
			date: date2.getTime()
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});
});

describe('getSortFunction function', () => {
	it('invalid sort type', () => {
		const result = getSortFunction("Kokoro");
		expect(result).toBeUndefined();
	});

	it('sortByItemNames type', () => {
		const result = getSortFunction(sortTypes.ITEM_NAMES);
		expect(result).toEqual(sortByItemNames);
	});

	it('sortByDate type', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toEqual(sortByDate);
	});

	it('sortByItemCount type', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toEqual(sortByItemCount);
	});
});
