import {getDate, } from "./getDate";

describe('getDate', () => {
	it('undefined if timestamp is null', () => {
		const result = getDate(null);

		expect(result).toBeUndefined();
	});

	it('string if timestamp is number', () => {
		const result = getDate(123);

		expect(typeof result).toBeTruthy();
	});

	it('correct date string', () => {
		const result = getDate(1584627487225);

		expect(result).toEqual('19 марта, чт, 2020 год');
	});
});
