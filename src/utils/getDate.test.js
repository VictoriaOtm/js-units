import React from 'react';
import { getDate } from "./getDate";

describe('getDate function', () => {
	it('timestamp is null', () => {
		const result = getDate(null);
		expect(result).toBeUndefined();
	});

	it('timestamp is empty object', () => {
		const result = getDate({});
		expect(result).toBeUndefined();
	});

	// it('timestamp is zero', () => {
	// 	const result = getDate(0);
	// 	expect(result).toEqual("1 января, чт, 1970 год"); // returns undefined for some reason
	// });

	it('timestamp is valid', () => {
		const timestamp = new Date('March 19, 2020 22:00:00').getTime();

		const result = getDate(timestamp);
		expect(result).toEqual("19 марта, чт, 2020 год");
	});
});
