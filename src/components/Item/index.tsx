import React from 'react';
import styled from 'styled-components';
import { IItem } from '../../pages/products/model';
import { Text18B, Text16R, Text20B } from '@components/Shared/Text';
import Tag from '@components/Shared/Tag';
import Badge from '@components/Shared/Badge';
import { theme } from '@styles/theme';

interface IProps {
  item: IItem;
  addCartItem: (item: IItem) => void;
  removeCartItem: (item: IItem) => void;
  checkedCart: (item: IItem) => boolean;
}

const Item = ({ item, addCartItem, checkedCart, removeCartItem }: IProps) => {
  return (
    <Container>
      <ImageWrapper>
        {item.availableCoupon ?? (
          <Badge left={0} top={6} backgroundColor={theme.black}>
            쿠폰사용가능
          </Badge>
        )}
        <img className="product-img" src={item.detail_image_url} alt="products image" />
      </ImageWrapper>
      <Content>
        <ItemDetailWrapper>
          <Text16R padding="0 0 4px 0" textHideMultiline textHidelineNum={1}>
            {item.item_name}
          </Text16R>
          <Text18B padding="0 0 4px 0">{item.price.toLocaleString()}원</Text18B>
          <Tag padding="4px 8px" color={theme.black} backgroundColor={theme.grey10} borderRadius={4}>
            무료배송
          </Tag>
        </ItemDetailWrapper>
        <CartBtn onClick={checkedCart(item) ? () => removeCartItem(item) : () => addCartItem(item)}>
          {checkedCart(item) ? (
            <Text20B className="cart-text">빼기</Text20B>
          ) : (
            <Text20B className="cart-text">담기</Text20B>
          )}
        </CartBtn>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 450px;
  margin: 5px;
  cursor: pointer;
  padding-bottom: 24px;
  ${({ theme }) => theme.desktop`
    width: 400px;
  `}
  ${({ theme }) => theme.mobile`
    width: 300px;
  `}
`;

const ImageWrapper = styled.div`
  position: relative;
  .product-img {
    width: 450px;
    height: 450px;
    ${({ theme }) => theme.desktop`
      width: 400px;
      height: 400px;
    `}
    ${({ theme }) => theme.mobile`
      width: 300px;
      height: 300px;
    `}
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
  position: relative;
`;

const CartBtn = styled.div`
  display: inline-block;
  position: absolute;
  right: 0;
  bottom: 0;
  .cart-text:hover {
    color: ${theme.brandRed};
  }
`;

const ItemDetailWrapper = styled.div``;

export default React.memo(Item);
