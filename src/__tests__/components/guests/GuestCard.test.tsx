import React from 'react';
import { render } from '@testing-library/react';
import GuestCard from '../../components/guests/GuestCard';
import { Guest } from '../../types';


describe('GuestCard Component', () => {
  test('renders correctly', () => {
    const guest: Guest = { id: 'g1', name: 'John Doe', email: 'john@example.com', phone: '1234567890', avatarUrl: '' };
    render(<GuestCard guest={guest} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
