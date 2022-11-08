import React from 'react';
import styled from 'styled-components';
import { IItem } from './model/index';
import Image from 'next/image';
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
        <Image src={item.detail_image_url} alt="제품이미지" width={500} height={500} />
      </ImageWrapper>
      <ItemDetailWrapper>
        <Text16R padding="0 0 4px 0">{item.item_name}</Text16R>
        <Text18B padding="0 0 4px 0">{item.price}</Text18B>
        <Tag padding="4px 8px" color={theme.black} backgroundColor={theme.grey10} borderRadius={4}>
          무료배송
        </Tag>
      </ItemDetailWrapper>
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
`;

const ItemDetailWrapper = styled.div`
  padding-top: 14px;
`;

export default Item;
