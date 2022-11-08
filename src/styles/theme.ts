import styled, { css } from 'styled-components';
import { Obj } from '@model/index';

export const theme: Obj = {
  white: '#ffffff',
  black: '#000000',
  grey10: '#F4F4F4',
  grey20: '#D4D4D4',
  grey30: '#4b4a4a',
};

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
