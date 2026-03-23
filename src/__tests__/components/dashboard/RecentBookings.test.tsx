import React from 'react';
import { render } from '@testing-library/react';
import RecentBookings from '../../components/dashboard/RecentBookings';
import { BookingProvider } from '../../context/BookingContext';


describe('RecentBookings Component', () => {
  test('renders without crashing', () => {
    render(<BookingProvider><RecentBookings /></BookingProvider>);
  });
});
