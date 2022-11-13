import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Item from '@components/Item';
import productItmes from '@pages/api/productItems.json';
import { IItem } from '@pages/products/model';
import Pagination from '@components/Pagination';
import { pagination } from '@utils/Pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CART_LISTS, cartForm, DELETE_CART_ITEM } from '@store/cart';

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { cartLists } = useSelector(cartForm);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;
  const fetchProductItems = JSON.parse(JSON.stringify(productItmes));

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const checkedCart = useCallback(
    (item: IItem): boolean => {
      return !!cartLists.some((i: IItem) => i?.item_no === item?.item_no);
    },
    [cartLists]
  );

  const addCartItem = (item: IItem) => {
    if (cartLists.length > 2) {
      return alert('더 이상 담을 수 없습니다.');
    }
    dispatch(SET_CART_LISTS({ ...item, quantity: 1 }));
  };

  const removeCartItem = (item: IItem) => {
    dispatch(DELETE_CART_ITEM(item.item_no));
  };

  const paginationProducts = pagination(fetchProductItems.productItems, currentPage, pageSize);
  return (
    <Container>
      <Wrapper>
        {paginationProducts
          .sort((a: IItem, b: IItem) => b.score - a.score)
          .map((item: IItem, idx: number) => {
            return (
              <Item
                key={idx}
                item={item}
                addCartItem={addCartItem}
                checkedCart={checkedCart}
                removeCartItem={removeCartItem}
              />
            );
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
