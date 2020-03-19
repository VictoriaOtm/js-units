import React from 'react'
import {getDate} from './getDate';

describe('sortByItemCount function', () => {
	it('timestamp empty', () => {
		const result = getDate(null)
		expect(result).toEqual(undefined);
    });
    
    it('timestamp is not number', () => {
		const result = getDate('a')
		expect(result).toEqual(undefined);
    });
    
    it('timestamp is valid', () => {
		const result = getDate(1534723200000)
		expect(result).toEqual('20 августа, пн, 2018 год');
	});

});