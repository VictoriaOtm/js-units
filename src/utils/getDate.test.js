import { getDate } from './getDate';

describe('getDate function', ()=>{
  it('timestamp is invalid',()=>{
    const data = undefined;

    const result = getDate(data);

    expect(result).toBeUndefined();
  });

  it('timestamp is invalid',()=>{
    const data = 'aaaaaaaaaa';

    const result = getDate(data);

    expect(result).toBeUndefined();
  });

  it('timestamp is right', ()=>{
    const now = 1584636777746;

    const result = getDate(now);

    expect(result).toEqual("19 марта, чт, 2020 год");
  });

});
