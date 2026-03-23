import { createContext, useContext, useState, type ReactNode } from 'react';

const RoomContext = createContext<any>(null);

export function RoomContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<any>({});
  return <RoomContext.Provider value={{ ...state, setState }}>{children}</RoomContext.Provider>;
}

export function useRoom() {
  return useContext(RoomContext) ?? {};
}

export default RoomContext;
