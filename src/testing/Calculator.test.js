import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Test for Calculator', () => {
  test('checking for correct key pressed', () => {
    render(<Calculator />);
    const six = screen.getByText('6');
    const one = screen.getByText('1');
    const answer = screen.getByRole('none');
    fireEvent.click(six);
    fireEvent.click(one);
    expect(answer.textContent).toBe('61');
  });
});
