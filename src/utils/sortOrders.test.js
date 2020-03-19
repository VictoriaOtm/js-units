import {sortByDate} from './sortOrders.js';
import {sortByItemCount} from './sortOrders';
import {sortByItemNames} from './sortOrders.js';
import {sortOrders} from './sortOrders.js';
import {sortTypes} from './sortOrders.js';

describe('sortOrders function', () => {
    it('early exit when orders is null', () => {
        const result = sortOrders(null, sortTypes.COUNT);
        expect(result).toBeUndefined();
    });

    it('early exit when orders is empty array', () => {
        const result = sortOrders([], sortTypes.COUNT);
        expect(result).toBeUndefined();
    });

    it('early exit when sortType is null', () => {
        const result = sortOrders(['somedata'], null);
        expect(result).toBeUndefined();
	});
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

	it('same item names', () => {
		const order1 = {
			items: ['item'],
		};

		const order2 = {
			items: ['item'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
	});

    it('items are null', () => {
		const order1 = {
			items: null,
		};

		const order2 = {
			items: null,
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
    });

    it('first item name is greater', () => {
		const order1 = {
			items: ['item2'],
		};

		const order2 = {
			items: ['item1'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(1);
    });

    it('second item name is greater', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['item2'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(-1);
    });

    it('different item length', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['item1'],
		};

		const result = sortByItemNames(order1, order2);
		expect(result).toBe(0);
    });
});


describe('sortByItemCount function', () => {
	it('none params', () => {
		const result = sortByItemCount();
		expect(result).toEqual(0);
	});
	
	it('date are null', () => {
		const object1 = {};
		const object2 = {};
		const result = sortByItemCount(object1, object2);
		expect(result).toEqual(0);
	});

	it('items are null', () => {
		const order1 = {
			items: false
		};
		const order2 = {};
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

	it('first order count more', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});

	it('second order count more', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1', '2', '3'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});

    it('dates are null', () => {
		const order1 = {
			date: null,
		};

		const order2 = {
			date: null,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
    });

	it('same dates', () => {
		const dateLiteral = 1;

        const order1 = {
			date: dateLiteral,
		};

		const order2 = {
			date: dateLiteral,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(0);
	});

    it('first date is greater', () => {
        const firstDate = 1;
        const secondDate = 2;

		const order1 = {
			date: secondDate,
		};

		const order2 = {
            date: firstDate,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(-1);
    });

    it('second date is greater', () => {
        const firstDate = 1;
        const secondDate = 2;

		const order1 = {
			date: firstDate,
		};

		const order2 = {
            date: secondDate,
		};

		const result = sortByDate(order1, order2);
		expect(result).toBe(1);
    });
});

