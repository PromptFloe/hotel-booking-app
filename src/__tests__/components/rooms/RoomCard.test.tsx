import React from 'react';
import { render } from '@testing-library/react';
import RoomCard from '../../components/rooms/RoomCard';
import { Room } from '../../types';


describe('RoomCard Component', () => {
  test('renders correctly', () => {
    const room: Room = { id: '101', number: '101', type: 'single', status: 'available', price: 5000 };
    render(<RoomCard room={room} />);
    expect(screen.getByText('Room 101')).toBeInTheDocument();
  });
});
