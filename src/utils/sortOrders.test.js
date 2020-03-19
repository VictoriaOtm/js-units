import React from 'react'
import {sortTypes, getSortFunction, sortByItemCount, 
        sortByDate, sortByItemNames} from './sortOrders';

describe('getSortFunction', () => {
	it('type is null', () => {
		const result = getSortFunction(null);
		expect(result).toBeUndefined();;
	});
	
	it('sort types date', () => {
		const result = getSortFunction(sortTypes.DATE);
		expect(result).toBe(sortByDate);
	});
	
	it('sort types count', () => {
		const result = getSortFunction(sortTypes.COUNT);
		expect(result).toBe(sortByItemCount);
	});
	
	it('sort types item names', () => {
		const result = getSortFunction(sortTypes.ITEM_NAMES);
		expect(result).toBe(sortByItemNames);
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
	
	it('less items count', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['1', '2'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(-1);
	});
	
	it('more items count', () => {
		const order1 = {
			items: ['item1', 'item2'],
		};

		const order2 = {
			items: ['1'],
		};

		const result = sortByItemCount(order1, order2);

		expect(result).toBe(1);
	});
});

describe('sortByDate function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

    const date1 = new Date(2017, 1, 1);
    const date2 = new Date(2017, 3, 1);
    
	it('same date', () => {
		const order1 = {
			date: date1,
		};

		const order2 = {
			date: date1,
		};

		const result = sortByDate(order1, order2);
        
        expect(result).toBe(0);
		
	});
	
	it('smaller date', () => {
		const order1 = {
			date: date1,
		};

		const order2 = {
			date: date2,
		};

		const result = sortByDate(order1, order2);
        
        expect(result).toBe(1);
		
	});	
	
	it('bigger date', () => {
		const order1 = {
			date: date2,
		};

		const order2 = {
			date: date1,
		};

		const result = sortByDate(order1, order2);
        
        expect(result).toBe(-1);
		
	});
	
});

describe('sortByItemNames function', () => {
	it('orders are null', () => {
		const result = sortByItemNames(null, null);
		expect(result).toEqual(0);
	});

	it('same item names', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['item1'],
		};

		const result = sortByItemNames(order1, order2);
        
        expect(result).toBe(0);
		
	});
	
	it('smaller item name', () => {
		const order1 = {
			items: ['item1'],
		};

		const order2 = {
			items: ['item2'],
		};

		const result = sortByItemNames(order1, order2);
        
        expect(result).toBe(-1);
		
	});	
	
	it('bigger item name', () => {
		const order1 = {
			items: ['item2'],
		};

		const order2 = {
			items: ['item1'],
		};

		const result = sortByItemNames(order1, order2);
        
        expect(result).toBe(1);
		
	});
	
});
