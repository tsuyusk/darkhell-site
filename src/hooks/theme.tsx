import React, { createContext, useContext } from 'react';

interface ThemeState {
  themeName: string;
  handleSwitchTheme(): void;
}

const ThemeContext = createContext<ThemeState>({} as ThemeState);

interface ThemeProviderProps {
  themeName: string;
  handleSwitchTheme(): void;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  themeName,
  handleSwitchTheme,
  children,
}) => {
  return (
    <ThemeContext.Provider
      value={{
        themeName,
        handleSwitchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useCustomThemeProvider(): ThemeState {
  const authState = useContext(ThemeContext);

  if (!authState) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return authState;
}
