import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Dashboard from '../Dashboard';


describe('Dashboard Page', () => {
  test('renders without crashing', () => {
    render(<MemoryRouter><Dashboard /></MemoryRouter>);
  });
});
