import React from 'react';
import styled from 'styled-components';
import { IItem } from '@pages/products/model';
import { Text16R, Text20B, Text16B } from '@components/Shared/Text';
import { CountButton } from '@components/Shared/Button';

interface IProps {
  item: IItem;
}
const CartItem = ({ item }: IProps) => {
  return (
    <Container>
      <CartItemWrapper>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault"></label>
        </div>
        <img className="products-ima" src={item.detail_image_url} alt="제품 이미지" />
        <ItemDetail>
          <div>
            <Text16B padding="0 0 5px 0">{item.item_name}</Text16B>
            <Text16R>{item.price.toLocaleString()}원</Text16R>
          </div>
          <CountButton />
        </ItemDetail>
      </CartItemWrapper>
    </Container>
  );
};

const Container = styled.section`
  padding: 20px 0;
`;

const CartItemWrapper = styled.div`
  display: flex;
  flex-direction: raw;
  .products-ima {
    width: 120px;
    height: 120px;
    margin: 0 20px 0 0;
  }
`;

const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default CartItem;
