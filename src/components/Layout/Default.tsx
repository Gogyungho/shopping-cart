import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { breakpoints } from '@utils/common/getMediaQuery';
import Header from '@components/Header';

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Container>
      <Header />
      <MainContent>{children}</MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.section`
  width: 100%;
  max-width: ${breakpoints.desktop}px;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  padding-top: 130px;
`;

export default DefaultLayout;
