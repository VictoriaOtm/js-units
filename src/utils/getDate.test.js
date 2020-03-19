import React from 'react'
import {getDate} from './getDate';

describe('getSortFunction', () => {
	it('type is null', () => {
		const result = getDate(null);
		expect(result).toBeUndefined();;
	});
	
	it('type is not null', () => {
		const result = getDate(1000);
		expect(result).toBe('1 января, чт, 1970 год');;
	});
});
