import React from 'react';
import { render, screen } from '@testing-library/react';
import GuestForm from '../../components/guests/GuestForm';


describe('GuestForm Component', () => {
  test('renders correctly', () => {
    render(<GuestForm />);
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
  });
});
