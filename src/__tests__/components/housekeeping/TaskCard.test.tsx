import React from 'react';
import { render } from '@testing-library/react';
import TaskCard from '../../components/housekeeping/TaskCard';
import { HousekeepingTask } from '../../types';


describe('TaskCard Component', () => {
  test('renders correctly', () => {
    const task: HousekeepingTask = { id: 't1', roomId: '101', description: 'Clean room', status: 'pending' };
    render(<TaskCard task={task} />);
    expect(screen.getByText('Task #t1')).toBeInTheDocument();
  });
});
