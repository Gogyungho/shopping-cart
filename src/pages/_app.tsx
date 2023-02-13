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
import { RecoilRoot } from 'recoil';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout): JSX.Element => {
  const getLayout = Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);

  return (
    <>
      <Head>
        <title>29CM FE Test</title>
      </Head>
      <ThemeProvider theme={{ ...theme, ...getMediaQuery }}>
        <RecoilRoot>
          <GlobalStyle />
          {getLayout(<Component {...pageProps} />)}
        </RecoilRoot>
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);
