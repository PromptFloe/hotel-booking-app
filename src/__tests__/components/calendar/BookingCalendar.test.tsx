import React from 'react';
import { render } from '@testing-library/react';
import BookingCalendar from '../../components/calendar/BookingCalendar';


describe('BookingCalendar Component', () => {
  test('renders without crashing', () => {
    render(<BookingCalendar />);
  });
});
