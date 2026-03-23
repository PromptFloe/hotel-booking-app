import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../../components/ui/Card';


describe('Card Component', () => {
  test('renders correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });
});
