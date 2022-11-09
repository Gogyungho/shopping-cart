import React, { useState } from 'react';
import styled from 'styled-components';
import Item from '@components/Item';
import productItmes from '@api/productItems.json';
import { IItem } from '@pages/products/model';
import Pagination from '@components/Pagination';
import { pagination } from '@utils/Pagination/Pagination';

const ProductsPage = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;
  const fetchProductItems = JSON.parse(JSON.stringify(productItmes));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const paginationProducts = pagination(fetchProductItems.productItems, currentPage, pageSize);

  return (
    <Container>
      <Wrapper>
        {paginationProducts
          .sort((a: IItem, b: IItem) => b.score - a.score)
          .map((item: IItem, idx: number) => {
            return <Item key={idx} item={item} />;
          })}
      </Wrapper>
      <Pagination
        items={fetchProductItems.productItems.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </Container>
  );
};

const Container = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
`;

export default ProductsPage;
