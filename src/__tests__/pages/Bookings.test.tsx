import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Bookings from '../Bookings';
import { BookingProvider } from '../../context/BookingContext';


describe('Bookings Page', () => {
  test('renders without crashing', () => {
    render(<MemoryRouter><BookingProvider><Bookings /></BookingProvider></MemoryRouter>);
  });
});
