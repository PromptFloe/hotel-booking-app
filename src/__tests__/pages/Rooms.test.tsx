import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Rooms from '../Rooms';
import { RoomProvider } from '../../context/RoomContext';


describe('Rooms Page', () => {
  test('renders without crashing', () => {
    render(<MemoryRouter><RoomProvider><Rooms /></RoomProvider></MemoryRouter>);
  });
});
