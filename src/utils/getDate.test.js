import React from 'react'
import {getDate} from './getDate';

describe('getDate function', () => {
    it('!timestamp', () => {
        const result = getDate();
        expect(result).toBeUndefined();
    });
    it('timestamp !== "number"', () => {
        const result = getDate('i love testing');
        expect(result).toBeUndefined();
    });

    it('correct date', () => {
        const result = getDate(Date.now());
        expect(result).toBe("19 марта, чт, 2020 год");
    });
});