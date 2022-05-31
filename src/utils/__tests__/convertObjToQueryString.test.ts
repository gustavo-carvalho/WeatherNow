import convertObjToQueryString from '../convertObjToQueryString';

describe('convertObjToQueryString', () => {
  it('should convert the obj to a query string correctly', () => {
    const param = {
      paramK1: 'paramV1',
      paramK2: 'paramV2',
    };
    const result = convertObjToQueryString(param);

    expect(result).toBe('paramK1=paramV1&paramK2=paramV2');
  });

  it('should return an empty string when the params is empty', () => {
    const result = convertObjToQueryString({});
    expect(result).toBe('');
  });
});
