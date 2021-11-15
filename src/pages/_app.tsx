import { RootProvider } from '@/hooks';

import { Global as GlobalStyle } from '@/styles/Global';

function MyApp({ Component, pageProps }) {
  if (!process.browser) {
    return null;
  }

  return (
    <>
      <RootProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </RootProvider>
    </>
  );
}

export default MyApp;
