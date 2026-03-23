import React from 'react';
import { render } from '@testing-library/react';
import Reports from '../Reports';


describe('Reports Page', () => {
  test('renders without crashing', () => {
    render(<Reports />);
  });
});
