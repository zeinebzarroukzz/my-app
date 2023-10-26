import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MyForm from './components/Booking/BookingForm'; // Assuming your form component is in a separate file

describe('Form Validation', () => {
  test('Form is valid when input is valid', () => {
    render(<MyForm />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: 'john' } });
    fireEvent.change(passwordInput, { target: { value: 'validPassword' } });

    expect(submitButton).toBeEnabled();
  });

  test('Form is invalid when input is invalid', () => {
    render(<MyForm />);
    const usernameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Submit');

    fireEvent.change(usernameInput, { target: { value: '' } });
    fireEvent.change(passwordInput, { target: { value: 'short' } });

    expect(submitButton).toBeDisabled();
  });
});

