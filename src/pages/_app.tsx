import { RootProvider } from '@/hooks';
import { Global as GlobalStyle } from '../styles/Global';

function MyApp({ Component, pageProps }) {
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
