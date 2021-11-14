import { useMemo, useCallback } from 'react';
import { RootProvider } from '@/hooks';

import { Global as GlobalStyle } from '@/styles/Global';
import { lightTheme } from '@/styles/themes/light';
import { darkTheme } from '@/styles/themes/dark';
import { usePersistedState } from '@/utils/usePersistedState';

function MyApp({ Component, pageProps }) {
  const [themeName, setThemeName] = usePersistedState('theme', 'light');

  const storagedTheme = useMemo(() => {
    return themeName === 'light' ? lightTheme : darkTheme;
  }, [themeName]);

  const handleSwitchTheme = useCallback(() => {
    setThemeName(state => (state === 'light' ? 'dark' : 'light'));
  }, []);

  return (
    <>
      <RootProvider theme={storagedTheme}>
        <GlobalStyle />
        <Component
          themeName={themeName}
          handleSwitchTheme={handleSwitchTheme}
          {...pageProps}
        />
      </RootProvider>
    </>
  );
}

export default MyApp;
