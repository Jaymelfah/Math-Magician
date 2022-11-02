import calculate from '../logic/calculate';

describe('test for calculator file', () => {
  test('check if AC button works correctly', () => {
    const newobject = {
      total: 25,
      next: null,
      operation: null,
    };
    expect(calculate(newobject, 'AC')).toStrictEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('check equal button works correctly', () => {
    const newobject = {
      total: 5,
      next: 2,
      operation: '+',
    };
    expect(calculate(newobject, '=')).toStrictEqual({
      total: '7',
      next: null,
      operation: null,
    });
  });

  test('check if +/- button is working correctly', () => {
    const newobject = {
      total: 0,
      next: 2,
      operation: null,
    };
    expect(calculate(newobject, '+/-')).toStrictEqual({
      total: 0,
      next: '-2',
      operation: null,
    });
  });
});
