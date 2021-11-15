import React, { useMemo, useCallback } from 'react';
import { ThemeProvider } from 'styled-components';

import { ThemeProvider as CustomThemeProvider } from './theme';
import { lightTheme } from '@/styles/themes/light';
import { darkTheme } from '@/styles/themes/dark';
import { usePersistedState } from '@/utils/usePersistedState';

export const RootProvider: React.FC = ({ children }) => {
  const [themeName, setThemeName] = usePersistedState('theme', 'light');

  const storagedTheme = useMemo(() => {
    return themeName === 'light' ? lightTheme : darkTheme;
  }, [themeName]);

  const handleSwitchTheme = useCallback(() => {
    setThemeName(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <CustomThemeProvider
      themeName={themeName}
      handleSwitchTheme={handleSwitchTheme}
    >
      <ThemeProvider theme={storagedTheme}>{children}</ThemeProvider>
    </CustomThemeProvider>
  );
};
