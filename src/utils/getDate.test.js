import { getDate } from './getDate'

describe('getDate function', () => {
	it('positive input', () => {
		const today = 1584636407131;
		const result = getDate(today);
		expect(result).toBe('19 марта, чт, 2020 год');
	});

	it('null input ', () => {
		const result = getDate(null);
		expect(result).toBeUndefined();
	});

	it('undefined input', () => {
		const result = getDate(undefined);
		expect(result).toBeUndefined();
	});

	it('not number input', () => {
		const result = getDate('abc');
		expect(result).toBeUndefined();
	});
});