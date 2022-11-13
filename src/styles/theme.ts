import styled, { css } from 'styled-components';
import { Obj } from '@model/index';

export const theme: Obj = {
  white: '#ffffff',
  black: '#000000',
  grey10: '#F4F4F4',
  grey20: '#D4D4D4',
  grey30: '#4b4a4a',
  brandRed: '#fc520f',
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const verticalCenter = css`
  display: flex;
  align-self: center;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const FlexCenter = styled.div<{ padding?: string; margin?: string; pointer?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'static')};
`;

export const FlexCol = styled.div<{
  padding?: string;
  margin?: string;
  width?: string;
  pointer?: boolean;
}>`
  display: flex;
  flex-direction: column;
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  width: ${({ width }) => width && width};
  cursor: ${({ pointer }) => (pointer ? 'pointer' : 'static')};
`;

export const FlexBetween = styled.div<{
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  pointer?: boolean;
}>`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  cursor: ${(props) => (props.pointer ? 'pointer' : 'static')};
`;

export const FlexColStart = styled.div<{ margin?: string; padding?: string; width?: string }>`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding: ${({ padding }) => padding && padding};
  margin: ${({ margin }) => margin && margin};
`;
