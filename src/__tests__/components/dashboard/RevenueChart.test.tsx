import React from 'react';
import { render } from '@testing-library/react';
import RevenueChart from '../../components/dashboard/RevenueChart';


describe('RevenueChart Component', () => {
  test('renders without crashing', () => {
    render(<RevenueChart />);
  });
});
