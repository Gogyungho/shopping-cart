import React from 'react';
import { Text18B } from '@components/Shared/Text';
import { theme } from '@styles/theme';
import styled from 'styled-components';

interface IProps {
  children: React.ReactNode;
  backgroundColor?: string;
  left?: number;
  top?: number;
}

const Badge = ({ children, backgroundColor, left, top }: IProps) => {
  return (
    <BadgeWrapper backgroundColor={backgroundColor} left={left} top={top}>
      <Text18B color={theme.white}>{children}</Text18B>
    </BadgeWrapper>
  );
};

const BadgeWrapper = styled.div<IProps>`
  position: absolute;
  display: flex;
  left: ${(props) => props.left && props.left}%;
  top: ${(props) => props.top && props.top}%;
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
  padding: 5px 10px;
`;

export default Badge;
