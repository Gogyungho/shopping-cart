import React from 'react';
import styled from 'styled-components';
import { Text10B } from '@components/Shared/Text';

interface ITagProps {
  children: React.ReactNode;
  width?: string;
  padding?: string;
  margin?: string;
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  borderColor?: string;
  center?: boolean;
}

const Tag = ({
  children,
  width,
  padding,
  margin,
  color,
  backgroundColor,
  borderRadius,
  borderColor,
  center,
}: ITagProps) => {
  return (
    <Container
      padding={padding}
      margin={margin}
      backgroundColor={backgroundColor}
      color={color}
      borderRadius={borderRadius}
      width={width}
      center={center}
      borderColor={borderColor}
    >
      {children}
    </Container>
  );
};

const Container = styled(Text10B)<ITagProps>`
  display: inline-block;
  width: ${(props) => props.width && props.width};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  border-radius: ${(props) => props.borderRadius && props.borderRadius}px;
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
  color: ${(props) => props.color && props.color};
  text-align: ${(props) => props.center && 'center'};
  border: ${(props) => props.borderColor && `1px solid ${props.borderColor}`};
`;

export default Tag;
