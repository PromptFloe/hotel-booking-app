import React from 'react';
import { render } from '@testing-library/react';
import Calendar from '../Calendar';


describe('Calendar Page', () => {
  test('renders without crashing', () => {
    render(<Calendar />);
  });
});
