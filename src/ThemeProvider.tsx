import React, { useState } from "react";

interface ThemeContextType {
  theme: string,
  setTheme: (theme: string) => void;
}

const ThemeContext = React.createContext<ThemeContextType | null>(null);

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [theme, setTheme] = useState<string>('light');
  
  const value = { theme, setTheme }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };

