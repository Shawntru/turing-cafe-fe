import React from 'react';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Form from './Form.js';

describe('Form', () => {
  it('should render correctly and display input fields', () => {
    render(<Form />);
    expect(screen.getByTestId('form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Date (mm/dd)')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Time')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Number of Guests')).toBeInTheDocument();
  });

  it('should reflect the users typed value inside the input field', () => {
    render(<Form />);

    const nameInput = screen.getByPlaceholderText('Name');
    userEvent.type(nameInput, 'Spud McButts');
    expect(nameInput).toHaveValue('Spud McButts');
  });
});
