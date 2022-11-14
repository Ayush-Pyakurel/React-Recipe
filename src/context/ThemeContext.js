import { createContext } from 'react';

export const ThemeContext = createContext();

//function to provide the value to the component that uses ThemeContext
export function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={{ color: 'grey' }}>
      {children}
    </ThemeContext.Provider>
  );
}
