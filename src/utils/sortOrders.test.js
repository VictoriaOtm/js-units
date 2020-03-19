import React from 'react'
import {sortByItemCount, sortByItemNames, sortByDate, sortOrders, getSortFunction} from './sortOrders';
import {fakeOrders} from '../mock/fakeOrders';

describe('sortByItemCount function', () => {
	it('Correct data: item1.length > item2.length', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('Correct data: item1.length < item2.length', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});

	it('Correct data: item1.length = item2.length', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(0);
	});

	it('Incorrect data: order isn`t an object', () => {
		const order1 = 'item1';

		const order2 = 'item2';

		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('Incorrect data: items are null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items: null,
		};

		const result = sortByItemCount(order1, order2);
		expect(result).toEqual(0);
	});

	it('Incorrect data: orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});
});

describe('sortByItemNames function', () => {
	it('Correct data: return -1', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item3'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(-1);
	});

	it('Correct data: return 1', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1', 'item1'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(1);
	});

	it('Incorrect data: order isn`t an object', () => {
		const order1 = 'item1';

		const order2 = 'item2';

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('Incorrect data: items are null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items: null,
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});

	it('Incorrect data: orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});
});

describe('sortByDate function', () => {
	it('Correct data: data1 < data2', () => {
		const order1 = {
			date: 1544356800000,
		};

		const order2 = {
			date: 1552481120000,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(1);
	});

	it('Correct data: data1 > data2', () => {
		const order1 = {
			date: 1552481120000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(-1);
	});

	it('Correct data: data1 = data2', () => {
		const order1 = {
			date: 1544356800000,
		};

		const order2 = {
			date: 1544356800000,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('Incorrect data: order isn`t an object', () => {
		const order1 = 'date1';

		const order2 = 'date2';

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});

	it('Incorrect data: orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('Inorrect data: data is null', () => {
		const order1 = {
			date: null,
		};

		const order2 = {
			date: null,
		};

		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});
});

describe('sortOrders function', () => {
	it('Incorrect data: order is null', () => {
		const order = null;

		const result = sortOrders(order, sortByDate);
		expect(result).toBeUndefined();
	});

	it('Incorrect data: function is null', () => {
		const order = fakeOrders;

		const result = sortOrders(order, null);
		expect(result).toBeUndefined();
	});
});

describe('getSortFunction function', () => {
	it('Correct data: sortByItemNames', () => {
		const result = getSortFunction('names');
		expect(result).toBe(sortByItemNames);
	});

	it('Correct data: sortByDate', () => {
		const result = getSortFunction('date');
		expect(result).toBe(sortByDate);
	});

	it('Correct data: sortByItemsCount', () => {
		const result = getSortFunction('count');
		expect(result).toBe(sortByItemCount);
	});
});
