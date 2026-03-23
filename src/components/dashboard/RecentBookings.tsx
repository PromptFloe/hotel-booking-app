import React from 'react';
import { useBookings } from '../../context/BookingContext';
import { DataTable } from '../ui/DataTable';
import { guests } from '../../data/guests';
import { rooms } from '../../data/rooms';

const RecentBookings: React.FC = () => {
  const { bookings } = useBookings();
  const headers = ['Guest', 'Room', 'Check-In', 'Check-Out', 'Status'];
  const rows = bookings.map(booking => {
    const guest = guests.find(g => g.id === booking.guestId);
    const room = rooms.find(r => r.id === booking.roomId);
    return [
      <span className="font-medium text-textPrimary">{guest ? guest.name : booking.guestId}</span>,
      <span>{room ? `Room ${room.number}` : booking.roomId}</span>,
      <span>{booking.checkIn.toLocaleDateString()}</span>,
      <span>{booking.checkOut.toLocaleDateString()}</span>,
      <span className="capitalize">{booking.status}</span>,
    ];
  });
  return <DataTable headers={headers} rows={rows} />;
};
export default RecentBookings;
