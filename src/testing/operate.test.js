import operate from '../logic/operate';

describe('math operations', () => {
  test('addition', () => {
    expect(operate(2, 4, '+')).toBe('6');
  });

  test('subtraction', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  test('multiplication', () => {
    expect(operate(3, 3, 'x')).toBe('9');
  });

  test('division', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('modulo', () => {
    expect(operate(9, 3, '%')).toBe('0');
  });
});
