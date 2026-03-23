import React from 'react';
import { render } from '@testing-library/react';
import OccupancyReport from '../../components/reports/OccupancyReport';


describe('OccupancyReport Component', () => {
  test('renders without crashing', () => {
    render(<OccupancyReport />);
  });
});
