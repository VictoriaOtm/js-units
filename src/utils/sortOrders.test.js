import React from 'react'
import {sortByItemCount, sortByItemNames, sortByDate, sortOrders, getSortFunction, sortTypes} from './sortOrders';

describe('sortOrders function', () => {
	it('null order', () => {
		const result = sortOrders(null, function(){});
		expect(result).toBe(undefined)
	})

	it('order has not length field', () => {
		const order = {
			m: '1',
		};
		const result = sortOrders(order, function(){});
		expect(result).toEqual(undefined);
	});

	it('null sort function', () => {
		const order = [1, 2]
		const result = sortOrders(order, null);
		expect(result).toEqual(undefined);
	});

	it('not a function', () => {
		const order = [1, 2]
		const result = sortOrders(order, order);
		expect(result).toEqual(undefined);
	});
});

describe('getSortFunction function', () => {
	it('sort by date', () => {
		const result = getSortFunction(sortTypes.DATE)
		expect(result).toBe(sortByDate)
	});

	it('sort by count', () => {
		const result = getSortFunction(sortTypes.COUNT)
		expect(result).toBe(sortByItemCount)
	});

	it('sort by names', () => {
		const result = getSortFunction(sortTypes.ITEM_NAMES)
		expect(result).toBe(sortByItemNames)
	});
});

describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('orders have not items field', () => {
		const order1 = {
			item: ['item1', 'item2'],
		};

		const order2 = {
			item: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

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

	it('orders\' types are not object', () => {
		const resutl = sortByItemCount(1, 2);
		expect(resutl).toBe(0)
	})

	it('1 greater than 2', () =>  {
		const order1 = {
			items: ['item1', 'item2', 'item3'],
		};

		const order2 = {
			items: ['item4', 'item5'],
		};
		const result = sortByItemCount(order1, order2)
		expect(result).toBe(1)
	})

	it('1 less than 2', () =>  {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item3', 'item4', 'item5'],
		};
		const result = sortByItemCount(order1, order2)
		expect(result).toBe(-1)
	})

});

// describe('sortByItem')
describe('sortByItemNames function', () => {
	it('orders\' types are not objects', () => {
		const result = sortByItemNames(1, 2);
		expect(result).toBe(0)
	})

	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('orders does not contain items', () => {
		const order1 = {
			list: ['item1', 'item2'],
		};

		const order2 = {
			list: ['1', '2'],
		};
		const result = sortByItemNames(order1, order2);
		expect(result).toEqual(0);
	});


	it('same items names', () => {
		const order1 = {
			items: ['a', 'b', 'c'],
		};

		const order2 = {
			items: ['a', 'b', 'c'],
		};

		const result = sortByItemNames(order1, order2);

		expect(result).toBe(0);
	});

	it('1 greater than 2', () =>  {
		const order1 = {
			items: ['b', 'c', 'd'],
		};

		const order2 = {
			items: ['a', 'b', 'c'],
		};
		const result = sortByItemNames(order1, order2)
		expect(result).toBe(1)
	})

	it('1 less than 2', () =>  {
		const order1 = {
			items: ['a', 'b', 'c'],
		};

		const order2 = {
			items: ['b', 'c', 'd'],
		};
		const result = sortByItemNames(order1, order2)
		expect(result).toBe(-1)
	})

});

describe('sortByDate function', () => {
	it('orders\' types are not objects', () => {
		const result = sortByDate(1, 2);
		expect(result).toBe(0)
	})

	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});

	it('orders does not contain data', () => {
		const order1 = {
			m: '1',
		};

		const order2 = {
			m: '2',
		};
		const result = sortByDate(order1, order2);
		expect(result).toEqual(0);
	});


	it('same dates', () => {
		const order1 = {
			date: new Date('December 17, 1995 03:24:00'),
		};

		const order2 = {
			date: new Date('December 17, 1995 03:24:00'),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(0);
	});

	it('1 less than 2', () => {
		const order1 = {
			date: new Date('December 16, 1994 03:24:00'),
		};

		const order2 = {
			date: new Date('December 17, 1995 03:24:00'),
		};

		const result = sortByDate(order1, order2);

		expect(result).toBe(1);
	});

	it('1 greater than 2', () => {
		const order1 = {
			date: new Date('December 16, 1994 03:24:00'),
		};

		const order2 = {
			date: new Date('December 17, 1995 03:24:00'),
		};

		const result = sortByDate(order2, order1);

		expect(result).toBe(-1);
	});

});