import React from 'react';
import { render } from '@testing-library/react';
import BookingCard from '../../components/bookings/BookingCard';
import { Booking } from '../../types';


describe('BookingCard Component', () => {
  test('renders correctly', () => {
    const booking: Booking = { id: 'b1', guestId: 'g1', roomId: '101', checkIn: new Date(), checkOut: new Date(), status: 'confirmed' };
    render(<BookingCard booking={booking} />);
    expect(screen.getByText('Booking #b1')).toBeInTheDocument();
  });
});
