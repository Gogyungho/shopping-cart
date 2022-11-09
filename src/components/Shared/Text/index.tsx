import React from 'react';
import { theme } from '@styles/theme';
import styled, { css } from 'styled-components';

export interface IProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  position?: string;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: string;
  height?: string;
  margin?: string;
  padding?: string;
  size?: number;
  weight?: number;
  backgroundColor?: string;
  color?: string;
  textDecoration?: string;
  pointer?: boolean;
  opacity?: number;
  center?: boolean;
  whiteSpace?: string;
  display?: string;
  wordBreak?: string;
  wordWrap?: string;
  textHide?: boolean;
  textHideMultiline?: boolean;
  textHidelineNum?: number;
}

const Text = (props: IProps) => {
  return <Container {...props}>{props.children}</Container>;
};

const Container = styled.div<IProps>`
  display: ${(props) => props.display && props.display};
  box-sizing: border-box;
  position: ${(props) => props.position && props.position};
  top: ${(props) => props.top && `${props.top}px`};
  right: ${(props) => props.right && `${props.right}px`};
  bottom: ${(props) => props.bottom && `${props.bottom}px`};
  left: ${(props) => props.left && `${props.left}px`};
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.height && props.height};
  margin: ${(props) => props.margin && props.margin};
  padding: ${(props) => props.padding && props.padding};
  background-color: ${(props) => props.backgroundColor && props.backgroundColor};
  color: ${(props) => (props.color ? props.color : theme.black)};
  text-decoration: ${(props) => props.textDecoration && props.textDecoration};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'static')};
  opacity: ${(props) => props.opacity && props.opacity};
  white-space: ${(props) => (props.whiteSpace ? props.whiteSpace : 'pre-wrap')};
  text-align: ${(props) => (props.center ? 'center' : '')};
  word-break: ${(props) => props.wordBreak && props.wordBreak};
  word-wrap: ${(props) => props.wordWrap && props.wordWrap};

  ${({ textHideMultiline, textHidelineNum }) => {
    if (textHideMultiline) {
      return css`
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: ${textHidelineNum ? textHidelineNum : 2};
        -webkit-box-orient: vertical;
      `;
    }
  }}
`;

export const Text24B = styled(Text)`
  font-size: 24px;
  letter-spacing: -0.4px;
  font-weight: bold;
  line-height: 38px;
`;

export const Text20B = styled(Text)`
  font-size: 20px;
  letter-spacing: -0.4px;
  font-weight: bold;
  line-height: 30px;
`;

export const Text18B = styled(Text)`
  font-size: 18px;
  letter-spacing: -0.4px;
  font-weight: bold;
  line-height: 26px;
`;

export const Text18R = styled(Text)`
  font-size: 18px;
  letter-spacing: -0.4px;
  font-weight: normal;
  line-height: 26px;
`;

export const Text16B = styled(Text)`
  font-size: 16px;
  letter-spacing: -0.4px;
  font-weight: bold;
  line-height: 24px;
`;

export const Text16R = styled(Text)`
  font-size: 16px;
  letter-spacing: -0.4px;
  font-weight: normal;
  line-height: 24px;
`;

export const Text10B = styled(Text)`
  font-size: 10px;
  letter-spacing: -0.4px;
  font-weight: bold;
  line-height: 16px;
`;

export default Text;
