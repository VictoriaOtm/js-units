import React from 'react';
import { sortByDate, sortByItemCount, sortByItemNames } from './sortOrders';

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

  it('different items count1', () => {
    const order1 = {
      items: ['item1', 'item2', 'item3'],
    };

    const order2 = {
      items: ['1', '2'],
    };

    const result = sortByItemCount(order1, order2);

    expect(result).toBe(1);
  });

  it('different items count2', () => {
    const order1 = {
      items: ['1', '2'],
    };

    const order2 = {
      items: ['item1', 'item2', 'item3'],
    };

    const result = sortByItemCount(order1, order2);

    expect(result).toBe(-1);
  });
});

describe('sortByItemNames', () => {
  it('orders are not object', () => {
    const order1 = '3';
    const order2 = '3';

    const result = sortByItemNames(order1, order2);

    expect(result).toBe(0);
  });

  it('orders are not object', () => {
    const order1 = {
      items: ['item1', 'item2', 'item3'],
    };
    const order2 = '3';

    const result = sortByItemNames(order1, order2);

    expect(result).toBe(0);
  });

  it('orders are equal', () => {
    const order1 = {
      items: ['item1', 'item2', 'item3'],
    };
    const order2 = {
      items: ['item1', 'item2', 'item3'],
    };

    const result = sortByItemNames(order1, order2);

    expect(result).toBe(0);
  });

  it('orders are null', () => {
    const order1 = {
      items: ['item1', 'item2', 'item3'],
    };
    const order2 = null;

    const result = sortByItemNames(order1, order2);

    expect(result).toBe(0);
  });

  it('order1 is greater than order2', () => {
    const order1 = {
      items: ['Samsung', 'Apple', 'Mac'],
    };
    const order2 = {
      items: ['Ananas', 'Apple', 'Mac'],
    };

    const result = sortByItemNames(order1, order2);

    expect(result).toBe(1);
  });

  it('order1 is greater than order2', () => {
    const order1 = {
      items: ['Amway', 'Apple', 'Mac'],
    };
    const order2 = {
      items: ['Ananas', 'Apple', 'Mac'],
    };

    const result = sortByItemNames(order1, order2);

    expect(result).toBe(-1);
  });
});

describe('sortByDate', () => {
  it('orders are null', () => {
    const order1 = null;
    const order2 = null;

    const result = sortByDate(order1, order2);

    expect(result).toBe(0);
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

  it('order1 < order2', () => {
    const order1 = {
      date: 34234234,
    };
    const order2 = {
      date: 4583475834,
    };

    const result = sortByDate(order1, order2);

    expect(result).toBe(1);
  });

  it('order1 > order2', () => {
    const order1 = {
      date: 4583475834,
    };
    const order2 = {
      date: 34234234,
    };

    const result = sortByDate(order1, order2);

    expect(result).toBe(-1);
  });

  it('order1 = order2', () => {
    const order1 = {
      date: 34234234,
    };
    const order2 = {
      date: 34234234,
    };

    const result = sortByDate(order1, order2);

    expect(result).toBe(0);
  });
});
