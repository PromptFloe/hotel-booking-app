import React from 'react';
import { render, screen } from '@testing-library/react';
import RoomForm from '../../components/rooms/RoomForm';
import { RoomProvider } from '../../context/RoomContext';


describe('RoomForm Component', () => {
  test('renders correctly', () => {
    render(<RoomProvider><RoomForm /></RoomProvider>);
    expect(screen.getByPlaceholderText('Room Number')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Price')).toBeInTheDocument();
  });
});
