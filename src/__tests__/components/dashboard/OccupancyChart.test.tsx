import React from 'react';
import { render } from '@testing-library/react';
import OccupancyChart from '../../components/dashboard/OccupancyChart';


describe('OccupancyChart Component', () => {
  test('renders without crashing', () => {
    render(<OccupancyChart />);
  });
});
