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
        <img src="https://yip.su/1kF6u7" alt="BgBanner" />

        <Component {...pageProps} />
      </RootProvider>
    </>
  );
}

export default MyApp;
