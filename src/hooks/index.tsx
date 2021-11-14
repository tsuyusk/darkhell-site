import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

interface RootProviderProps {
  theme: DefaultTheme;
}

export const RootProvider: React.FC<RootProviderProps> = ({
  theme,
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
