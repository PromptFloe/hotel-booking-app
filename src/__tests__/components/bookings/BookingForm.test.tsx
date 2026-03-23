import React from 'react';
import { render, screen } from '@testing-library/react';
import BookingForm from '../../components/bookings/BookingForm';
import { BookingProvider } from '../../context/BookingContext';


describe('BookingForm Component', () => {
  test('renders correctly', () => {
    render(<BookingProvider><BookingForm /></BookingProvider>);
    expect(screen.getByPlaceholderText('Guest ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Room ID')).toBeInTheDocument();
  });
});
