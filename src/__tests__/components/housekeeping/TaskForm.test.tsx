import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskForm from '../../components/housekeeping/TaskForm';


describe('TaskForm Component', () => {
  test('renders correctly', () => {
    render(<TaskForm />);
    expect(screen.getByPlaceholderText('Room ID')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Description')).toBeInTheDocument();
  });
});
