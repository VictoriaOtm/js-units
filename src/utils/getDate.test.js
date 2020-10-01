import {getDate} from "./getDate";

describe('getDate()', () => {
	it('timestamp', () => {
		const result = getDate(100500);

		expect(result).toEqual('1 января, чт, 1970 год');
	});

	it('not a number', () => {
		const result = getDate({});

		expect(result).toEqual(undefined);
	});
});
