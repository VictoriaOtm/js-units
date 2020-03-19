import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {

    it('wrong type timestamp', () => {
        const result = getDate(null);
		expect(result).toBeUndefined();
    });

    it('right type', () => {
        const result = getDate(1544356800000);
        expect(result).toEqual('9 декабря, вс, 2018 год');
    });
});