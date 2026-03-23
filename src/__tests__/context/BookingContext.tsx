import { createContext, useContext, useState, type ReactNode } from 'react';

const BookingContext = createContext<any>(null);

export function BookingContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<any>({});
  return <BookingContext.Provider value={{ ...state, setState }}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  return useContext(BookingContext) ?? {};
}

export default BookingContext;
