import { ReactElement, ReactNode } from 'react';
import { GlobalStyle } from '../styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from '../store/index';
import { ThemeProvider } from 'styled-components';
import getMediaQuery from '../util/common/getMediaQuery';
import { theme } from '../styles/theme';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  return (
    <ThemeProvider theme={{ ...theme, ...getMediaQuery }}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
