import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../../util/common/getMediaQuery';

const DefaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <Container>
      <MainContent>{children}</MainContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContent = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop}px;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
`;

export default DefaultLayout;
