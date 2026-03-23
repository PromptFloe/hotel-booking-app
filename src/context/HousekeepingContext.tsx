import { createContext, useContext, useState, type ReactNode } from 'react';

const HousekeepingContext = createContext<any>(null);

export function HousekeepingContextProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<any>({});
  return <HousekeepingContext.Provider value={{ ...state, setState }}>{children}</HousekeepingContext.Provider>;
}

export function useHousekeeping() {
  return useContext(HousekeepingContext) ?? {};
}

export default HousekeepingContext;
