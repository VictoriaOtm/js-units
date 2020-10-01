import React from 'react'
import {
	getSortFunction, sortByDate,
	sortByItemCount,
	sortOrders,
	sortTypes
} from './sortOrders'
import { getDate } from './getDate'


function* setup() {
	const dates = [
		new Date('December 17, 2020 18:24:00').getTime(),
		new Date('May 12, 2020 03:48:03').getTime(),
		new Date('September 2013, 1995 09:32:20').getTime(),
		new Date('June 17 2018, 12:24:00').getTime(),
		new Date('December 27, 2000 13:32:01').getTime(),
		new Date('Monday 7, 2001 15:06:00').getTime(),
		new Date('Monday 4, 1999 03:24:40').getTime(),
		new Date('Sunday 8, 2017 02:34:03').getTime(),
		new Date('June 1, 2015 03:34:32').getTime(),
		new Date('April 2, 2020 15:24:00').getTime(),
	]
	const shops = [
		'Mvideo',
		'Dolce and gabanna',
		'Gucci',
		'Пятерочка',
		'Магнит',
		'Универсам',
		'Nike',
		'Puma',
		'Макдак',
		'Кофейня',
	]
	const items = [
		['компьютер', 'телефон', 'пульт'],
		['духи', 'шляпа', 'штаны', 'кофта'],
		['носки'],
		['чипсы', 'сухарики', 'кола', 'туалетная бумага'],
		[ 'туалетная бумага'],
		[ 'салфетки'],
		['плавки', 'кроссовки', 'шорты'],
		['кофта РИТА'],
		['бургер', 'картошка фри'],
		['кофе', 'булочка'],
	]
	let i = 0;
	while(true) {
		yield {
			order: {
				items: items[i],
				shop: shops[i],
				date: dates[i],
			}
		}
		i++;
		if(i >= shops.length) {
			i = 0
		}
	}
}


describe('sortByItemCount function', () => {
	it('orders are null', () => {
		const result = sortByItemCount(null, null);
		expect(result).toEqual(0);
	});
	
	it('orders are null', () => {
		const result = sortByItemCount(1,1);
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
	
	it('no items', () => {
		const result = sortByItemCount({}, {});
		expect(result).toBe(0);
	});
});

describe('unit test sortOrders', () => {
	
	let gen = setup();
	//
	test.each([1, 5, 10, 13, 23, 30, 40, 10, 4, 20, 14, 8, 23, 17, 18, 99])('compare number of checks',
		(num) => {
			
			let orders = []
			for ( let i = 0; i < num; i++ ) {
				orders.push(gen.next().value)
			}
			
			let mockFn = jest.fn(() => {});
			const result = sortOrders(orders, mockFn)
			// n-1 comparison for n elems
			expect(mockFn.mock.calls.length).toBe(num - 1);
			
		})
});

describe('get sort function unit', () => {
	
	it('Get Count', () => {
		let fn = getSortFunction(sortTypes.COUNT)
		
		expect(fn).toEqual(sortByItemCount);
	});
	
	it('Get date', () => {
		let fn = getSortFunction(sortTypes.DATE)
		
		expect(fn).toEqual(sortByDate);
	});
});

describe('sortByDate function', () => {
	
	let gen = setup();
	it('orders are null', () => {
		const result = sortByDate(null, null);
		expect(result).toEqual(0);
	});
	
	test.each([-1,0,0,0,1])('2 dates', (num) => {
		const result = sortByDate(gen.next().value.order, gen.next().value.order);
		expect(result).toEqual(num);
	}
	)
	it('no date', () => {
		const result = sortByDate({}, {});
		expect(result).toBe(0);
	});
	it('null undefined', () => {
		const result = sortByDate(null, undefined);
		expect(result).toBe(0);
	});
	it('same', () => {
		const result = sortByDate({date : 123}, {date: 123});
		expect(result).toBe(0);
	});
});

describe('getDate function', () => {
	test.each([
		[1552481120000, '13 марта, ср, 2019 год'],
		[null, undefined],
	])('.getDate(%i)', (timestamp, expected) => {
		expect(getDate(timestamp)).toBe(expected);
	});
});

describe('sortOrders function', () => {
	it('null fn', () => {
		let res = sortOrders(null, () => {})
		expect(res).toBe(undefined)
	})
	it('arr null', () => {
		let res = sortOrders([1], null)
		expect(res).toBe(undefined)
	})
});