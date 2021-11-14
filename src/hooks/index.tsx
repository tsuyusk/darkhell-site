import React from 'react';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '@/styles/theme/default';

export const RootProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};
