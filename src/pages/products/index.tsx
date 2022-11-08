import React from 'react';
import styled from 'styled-components';
import Item from '@components/Item';
import productItmes from '@api/productItems.json';
import { IItem } from '@components/Item/model/index';

const ProductsPage = () => {
  const fetchProductItems = JSON.parse(JSON.stringify(productItmes));
  return (
    <Container>
      <Wrapper>
        {fetchProductItems.productItems
          .sort((a: IItem, b: IItem) => b.score - a.score)
          .map((item: IItem, idx: number) => {
            return <Item key={idx} item={item} />;
          })}
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default ProductsPage;
