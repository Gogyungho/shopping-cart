import React from 'react';
import styled from 'styled-components';
import { IItem } from '@pages/products/model';
import { Text16R, Text16B } from '@components/Shared/Text';
import { CountButton } from '@components/Shared/Button';
import { theme } from '@styles/theme';

interface IProps {
  item: IItem;
  onChange: (num: number) => void;
  quantityHandler: (type: string, id: number) => void;
}

const CartItem = ({ item, onChange, quantityHandler }: IProps) => {
  return (
    <Container>
      <CartItemWrapper>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value={item?.item_no}
            onChange={(e) => onChange(Number(e.target.value))}
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault"></label>
        </div>
        <img className="products-ima" src={item?.detail_image_url} alt="제품 이미지" />
        <ItemDetail>
          <div>
            <Text16B padding="0 0 5px 0">{item?.item_name}</Text16B>
            <FlexRow>
              <Text16B padding="0 5px 0 0">{(item?.price * item?.quantity)?.toLocaleString()}원</Text16B>
              {item?.availableCoupon !== false && <Text16R color={theme.brandRed}>쿠폰적용가능</Text16R>}
            </FlexRow>
          </div>
          <CountButton item={item} quantityHandler={quantityHandler} />
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

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export default React.memo(CartItem);
