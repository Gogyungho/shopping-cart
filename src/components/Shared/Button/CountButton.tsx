import React from 'react';
import styled from 'styled-components';
import { theme } from '@styles/theme';
import { Text10B, Text16B } from '@components/Shared/Text';
import { HiOutlinePlusSm, HiOutlineMinusSm } from 'react-icons/hi';
import { IItem } from '@pages/products/model';

interface IProps {
  item: IItem;
  quantityHandler: (type: string, id: number) => void;
}

const CountButton = ({ item, quantityHandler }: IProps) => {
  return (
    <Container>
      <Text10B>수량</Text10B>
      <ContentRowNum>
        <MinusBtn
          onClick={() => {
            quantityHandler('minus', item.item_no);
          }}
        >
          <HiOutlineMinusSm />
        </MinusBtn>
        <Text16B width="45px" center padding="1px 0 0 0">
          {item.quantity}
        </Text16B>
        <PlusBtn
          onClick={() => {
            quantityHandler('plus', item.item_no);
          }}
        >
          <HiOutlinePlusSm />
        </PlusBtn>
      </ContentRowNum>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 80px;
  background-color: ${theme.white};
  cursor: pointer;
`;

const ContentRowNum = styled.div`
  display: flex;
`;

const MinusBtn = styled.button`
  width: 27px;
  background: ${theme.white};
  border: 1px solid ${theme.grey20};
  box-shadow: 2px 2px 0 0 rgb(0 0 0 / 6%);
  color: #707070;
  cursor: pointer;
`;

const PlusBtn = styled(MinusBtn)``;

export default CountButton;
