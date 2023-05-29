import InputTodo from '@/components/InputTodo';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

describe('InputTodo', () => {
  it('should render with correct placeholder', () => {
    const { getByPlaceholderText } = render(<InputTodo />);
    const inputElement = getByPlaceholderText('Add Todo...');
    expect(inputElement).toBeInTheDocument();
  })

  it('handles input change properly', ()=> {
    const { getByPlaceholderText} = render(<InputTodo />);
    const inputElement = getByPlaceholderText('Add Todo...');

    fireEvent.change(inputElement, {target: {value: 'Zrobić preznetację'}});
    expect(inputElement.value).toBe('Zrobić preznetację');
  })
});
