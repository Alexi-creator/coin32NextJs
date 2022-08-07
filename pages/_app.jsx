import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../styles/globals';
import { baseTheme } from '../styles/baseTheme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Coin32</title>
        <link key={1} rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={baseTheme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
