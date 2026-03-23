import React from 'react';
import { render } from '@testing-library/react';
import Guests from '../Guests';


describe('Guests Page', () => {
  test('renders without crashing', () => {
    render(<Guests />);
  });
});
