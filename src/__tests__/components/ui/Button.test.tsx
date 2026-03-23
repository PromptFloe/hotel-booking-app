import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '../../components/ui/Button';


describe('Button Component', () => {
  test('renders correctly with default props', () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText('Click Me')).toBeInTheDocument();
  });

  test('renders correctly with primary variant', () => {
    render(<Button variant="primary">Primary Button</Button>);
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
  });

  test('renders correctly with secondary variant', () => {
    render(<Button variant="secondary">Secondary Button</Button>);
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
  });
});
