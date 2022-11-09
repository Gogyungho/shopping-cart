import React from 'react';
import styled, { css } from 'styled-components';
import { Text18B } from '@components/Shared/Text';
import { theme } from '@styles/theme';

interface IButtonProps {
  width?: string;
  height?: string;
  color?: string;
  backgroundColor?: string;
  pointer?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  padding?: string;
  margin?: string;
  border?: boolean;
  fontWeight?: number;
  justifyContent?: string;
}

const defaultStyle = {
  width: '100%',
  height: '56px',
  padding: '0',
  backgroundColor: theme.black,
  color: theme.white,
  pointer: true,
};

const Button = (props: IButtonProps) => {
  return <Container {...props}>{props.children}</Container>;
};

Button.defaultStyle = defaultStyle as IButtonProps;

export const Container = styled(Text18B)<IButtonProps>`
  display: flex;
  justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
  align-items: center;
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  padding: ${(props) => props.padding && props.padding};
  margin: ${(props) => props.margin && props.margin};
  color: ${(props) => props.color && props.color};
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'static')};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  ${({ disabled, border }) => {
    if (disabled) {
      return css`
        border: 1px solid ${theme.grey10};
        color: ${theme.grey20};
        background-color: ${theme.white};
      `;
    } else if (border) {
      return css`
        border: 1px solid ${theme.black};
      `;
    }
  }};

  div {
    cursor: ${(props) => (props.pointer ? 'pointer' : 'static')};
  }
`;

export default Button;
