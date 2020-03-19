import React from 'react'
import { getDate } from './getDate.js'

describe('getDate function', () => {
    it('orders are null', () => {
        const result = getDate("Something weird");
        expect(result).toBeUndefined();
    });

    it('get right date', () => {
        const date = new Date("2020-01-27");

        const result = getDate(date.getTime());

        expect(result).toBe("27 января, пн, 2020 год");
    });
});