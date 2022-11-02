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

  test('check if addition works correctly', () => {
    render(<Calculator />);
    const one = screen.getByText('1');
    const two = screen.getByText('2');
    const add = screen.getByText('+');
    const equals = screen.getByText('=');
    const answer = screen.getByRole('none');
    fireEvent.click(one);
    fireEvent.click(add);
    fireEvent.click(two);
    fireEvent.click(equals);
    expect(answer.textContent).toBe('3');
  });
});
