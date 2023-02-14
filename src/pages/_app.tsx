import { ReactElement, ReactNode } from 'react';
import { GlobalStyle } from '@styles/GlobalStyle';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { wrapper } from '@store/index';
import { ThemeProvider } from 'styled-components';
import getMediaQuery from '@utils/common/getMediaQuery';
import { theme } from '@styles/theme';
import Head from 'next/head';
import DefaultLayout from '@components/Layout/Default';
import 'bootstrap/dist/css/bootstrap.css';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const store: any = useStore();
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        <title>29CM FE Test</title>
      </Head>
      <ThemeProvider theme={{ ...theme, ...getMediaQuery }}>
        <GlobalStyle />
        <PersistGate persistor={store.__persistor}>{getLayout(<Component {...pageProps} />)}</PersistGate>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
