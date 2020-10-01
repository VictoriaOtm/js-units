import {getDate} from "./getDate";

describe('getDate()', () => {
	it('not a number', () => {
		const result = getDate({});
		expect(result).toBeUndefined();
	});
	
	it('timestamp', () => {
		const result = getDate(100500);
		expect(result).toEqual('1 января, чт, 1970 год');
	});
});
