import {sortByItemCount, sortByDate, sortOrders, sortByItemNames, sortTypes, getSortFunction} from './sortOrders';

describe('sortByItemCount function', () => {
	it('first length more than second', () => {
		const order1 = { items: ['1', '2', '3'] };
		const order2 = { items: ['1'] };

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(1);
	});

	it('first length less than second ', () => {
		const order1 = { items: ['1'] };
		const order2 = { items: ['1', '2', '3'] };

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(-1);
	});

	it('same items count', () => {
		const order1 = { items: ['item1', 'item2'] };
		const order2 = { items: ['1', '2'] };

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});

	it('one order is null', () => {
		const order1 = { items: ['1', '2', '3'] };
		const order2 = null;

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});

	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('incorrect items', () => {
		const order1 = { items: {} };
		const order2 = { items: {} };

		const result = sortByItemCount(order1, order2);
		expect(result).toBe(0);
	});
});

describe('sortByDate function', () => {
	it('first more than second', () => {
		const date1 = { date: 15 };
		const date2 = { date: 1 };

		const result = sortByDate(date1, date2);
		expect(result).toBe(-1);
	});

	it('first less than second', () => {
		const date1 = { date: 1 };
		const date2 = { date: 15 };

		const result = sortByDate(date1, date2);
		expect(result).toBe(1);
	});

	it('equals dates', () => {
		const date1 = { date: 1 };
		const date2 = { date: 1 };

		const result = sortByDate(date1, date2);
		expect(result).toBe(0);
	});

	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('one order is null', () => {
		const order1 = { items: ['1', '2', '3'] };
		const order2 = null;

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});

	it('one date is null', () => {
		const order1 = { date: 1 };
		const order2 = { date: null };

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});

	it('all dates are null', () => {
		const order1 = { date: null };
		const order2 = { date: null};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});
});

describe('sortOrders function', () => {
	it('empty orders', () => {
		const orders = [];
		const sortFunction = () => {};
		const result = sortOrders(orders, sortFunction);

		expect(result).toBeUndefined();
	});

	it('null orders', () => {
		const orders = null;
		const sortFunction = () => {};
		const result = sortOrders(orders, sortFunction);

		expect(result).toBeUndefined();
	});

	it('null sort function', () => {
		const orders = [];
		const sortFunction = null;
		const result = sortOrders(orders, sortFunction);

		expect(result).toBeUndefined();
	});

	it('sort function is not function', () => {
		const orders = [];
		const sortFunction = {};
		const result = sortOrders(orders, sortFunction);

		expect(result).toBeUndefined();
	});
});


describe('getSortFunction function', () => {
	it('date Sort Type', () => {
		expect(getSortFunction(sortTypes.DATE)).toBe(sortByDate);
	});

	it('count Sort Type', () => {
		expect(getSortFunction(sortTypes.COUNT)).toBe(sortByItemCount);
	});

	it('names Sort Type', () => {
		expect(getSortFunction(sortTypes.ITEM_NAMES)).toBe(sortByItemNames);
	});

	it('null Sort Type', () => {
		expect(getSortFunction(null)).toBe(undefined);
	});
});

describe('sortByItemNames function', () => {
	it('first more than second', () => {
		const order1 = { items: [15] };
		const order2 = { items: [1] };

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
	});

	it('first less than second',  () => {
		const order1 = { items: [1] };
		const order2 = { items: [15] };

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
	});

	it('equals',  () => {
		const order1 = { items: [15] };
		const order2 = { items: [15] };

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('both of orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toBe(0);
	});

	it('both of orders are not object', () => {
		const order1 = 'first';
		const order2 = 'second';

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

	it('items are not found', () => {
		const order1 = { first: 'first'};
		const order2 = { second: 'second'};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

});

