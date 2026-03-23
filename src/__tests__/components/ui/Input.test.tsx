import React from 'react';
import { render, screen } from '@testing-library/react';
import Input from '../../components/ui/Input';


describe('Input Component', () => {
  test('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });
});
