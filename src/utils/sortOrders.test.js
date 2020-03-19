import React from 'react'
import {getSortFunction, sortByDate, sortByItemCount, sortByItemNames, sortTypes} from './sortOrders';

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

	it('1 item count is greater ', () => {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('2 item count is greater ', () => {
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


describe('getSortFunction function', () => {
	it('undefined expect', () => {
		const sortType = "undefined";
		const result = getSortFunction(sortType);
		expect(result).toBeUndefined();
	});

	it(' expect sort by itemNames', () => {
		const sortType = sortTypes.ITEM_NAMES;
		const result = getSortFunction(sortType);
		expect(result).toEqual(sortByItemNames);
	});

	it('expect sort by Data', () => {
		const sortType = sortTypes.DATE;
		const result = getSortFunction(sortType);
		expect(result).toEqual(sortByDate);
	});

	it('expect sort by count', () => {
		const sortType = sortTypes.COUNT;
		const result = getSortFunction(sortType);
		expect(result).toEqual(sortByItemCount);
	});

});


describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('same items', () => {
		const order1 = {
			items: ['ant', 'bng'],
		};

		const order2 = {
			items: ['ant', 'bng'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});


	it('item 2 is greater', () => {
		const order1 = {
			items: ['ant', 'bng'],
		};

		const order2 = {
			items: ['bngg'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(-1);
	});


	it('item 1 is greater', () => {
		const order1 = {
			items: ['hhhh', 'bbbb' , 'aaa'],
		};

		const order2 = {
			items: ['hhhh', 'aaaa'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(1);
	});
});


describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('same date', () => {
		let date1 = new Date(2016, 3,4);
		let date2 = new Date(2016, 3,4);
		const order1 = {
			date: date1.getTime(),
		};

		const order2 = {
			date: date2.getTime(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});


	it('1 date is greater', () => {
		let date1 = new Date(2018, 5,4);
		let date2 = new Date(2016, 3,4);
		const order1 = {
			date: date1.getTime(),
		};

		const order2 = {
			date: date2.getTime(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(-1);
	});


	it('2 date is greater', () => {
		let date1 = new Date(2000, 5,4);
		let date2 = new Date(2016, 3,4);
		const order1 = {
			date: date1.getTime(),
		};

		const order2 = {
			date: date2.getTime(),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});
});