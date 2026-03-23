import React from 'react';
import { render, screen } from '@testing-library/react';
import Badge from '../../components/ui/Badge';


describe('Badge Component', () => {
  test('renders correctly with success status', () => {
    render(<Badge status="success">Success</Badge>);
    expect(screen.getByText('Success')).toBeInTheDocument();
  });
});
