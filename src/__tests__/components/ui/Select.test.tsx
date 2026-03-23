import React from 'react';
import { render, screen } from '@testing-library/react';
import Select from '../../components/ui/Select';


describe('Select Component', () => {
  test('renders correctly', () => {
    render(<Select><option value="1">Option 1</option></Select>);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });
});
