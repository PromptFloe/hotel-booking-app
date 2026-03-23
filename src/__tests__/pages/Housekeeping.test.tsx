import React from 'react';
import { render } from '@testing-library/react';
import Housekeeping from '../Housekeeping';
import { HousekeepingProvider } from '../../context/HousekeepingContext';


describe('Housekeeping Page', () => {
  test('renders without crashing', () => {
    render(<HousekeepingProvider><Housekeeping /></HousekeepingProvider>);
  });
});
