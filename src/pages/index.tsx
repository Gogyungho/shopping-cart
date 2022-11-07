import styled from 'styled-components';
import { NextPageWithLayout } from '../pages/_app';
import { breakpoints } from '../util/common/getMediaQuery';

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <DefaultLayout>Hello</DefaultLayout>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DefaultLayout = styled.div`
  width: 100%;
  max-width: ${breakpoints.desktop}px;
  height: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
`;

export default Home;
