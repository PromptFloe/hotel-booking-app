import React from 'react';
import { render } from '@testing-library/react';
import RevenueReport from '../../components/reports/RevenueReport';


describe('RevenueReport Component', () => {
  test('renders without crashing', () => {
    render(<RevenueReport />);
  });
});
