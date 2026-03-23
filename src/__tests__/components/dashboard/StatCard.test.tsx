import React from 'react';
import { render, screen } from '@testing-library/react';
import StatCard from '../../components/dashboard/StatCard';


describe('StatCard Component', () => {
  test('renders correctly', () => {
    render(<StatCard title="Total Revenue" value="₹500,000" trend="up" trendValue="5%" />);
    expect(screen.getByText('Total Revenue')).toBeInTheDocument();
    expect(screen.getByText('₹500,000')).toBeInTheDocument();
  });
});
