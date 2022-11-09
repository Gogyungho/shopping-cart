import React from 'react';
import styled from 'styled-components';
import { theme, verticalCenter } from '@styles/theme';
import { Text10B } from '@components/Shared/Text';
const CountButton = () => {
  return (
    <Container>
      <Text10B>수량</Text10B>
      <Qty name="select">
        <option value="" disabled hidden>
          1
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="8">9</option>
      </Qty>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 80px;
  background-color: ${theme.white};
  cursor: pointer;
`;

const Qty = styled.select`
  width: 50px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid grey;
`;

export default CountButton;
