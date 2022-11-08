import React from 'react';
import styled from 'styled-components';
import { IItem } from './model/index';
import { Text18B, Text16R } from '@components/Shared/Text';
import Tag from '@components/Shared/Tag';
import Badge from '@components/Shared/Badge';
import { theme } from '@styles/theme';

const Item = ({ item }: { item: IItem }) => {
  return (
    <Container>
      <ImageWrapper>
        {item.availableCoupon !== false && (
          <Badge left={0} top={6} backgroundColor={theme.black}>
            쿠폰사용가능
          </Badge>
        )}
        <img className="product-img" src={item.detail_image_url} alt="products image" />
      </ImageWrapper>
      <Content>
        <ItemDetailWrapper>
          <Text16R padding="0 0 4px 0">{item.item_name}</Text16R>
          <Text18B padding="0 0 4px 0">{item.price.toLocaleString()}원</Text18B>
          <Tag padding="4px 8px" color={theme.black} backgroundColor={theme.grey10} borderRadius={4}>
            무료배송
          </Tag>
        </ItemDetailWrapper>
        <CartBtn>
          <Text18B className="cart-text">담기</Text18B>
          <Text18B className="cart-text">빼기</Text18B>
        </CartBtn>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 500px;
  margin: 5px;
  cursor: pointer;
  padding-bottom: 24px;
`;

const ImageWrapper = styled.div`
  position: relative;
  .product-img {
    width: 500px;
    height: 500px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 14px;
`;
const CartBtn = styled.div`
  display: inline-block
  .cart-text:hover{
    color: ${theme.grey30};
  }
`;

const ItemDetailWrapper = styled.div``;

export default Item;
