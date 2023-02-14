import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import Item from '@components/Item';
import productItmes from '@pages/api/productItems.json';
import { IItem } from '@pages/products/model';
import Pagination from '@components/Pagination';
import { pagination } from '@utils/Pagination/Pagination';
import { useRecoilState } from 'recoil';
import { recoilCartState, CommonState } from '@states/recoilCartState';

const ProductsPage = () => {
  const [recoilCart, setRecoilCart] = useRecoilState(recoilCartState);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const pageSize = 5;
  const fetchProductItems = JSON.parse(JSON.stringify(productItmes));
  const sortProductsItems = fetchProductItems.productItems.sort((a: IItem, b: IItem) => b.score - a.score);
  const defaultRecoilCartState: CommonState = { ...recoilCart };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const checkedCart = useCallback(
    (item: IItem): boolean => {
      return !!recoilCart.cartList.some((i: IItem) => i?.item_no === item?.item_no);
    },
    [recoilCart.cartList]
  );

  const addCartItem = useCallback(
    (item: IItem) => {
      defaultRecoilCartState.cartList = [...recoilCart.cartList, item];
      setRecoilCart(defaultRecoilCartState);
      if (recoilCart.cartList.length > 2) {
        return alert('더 이상 담을 수 없습니다.');
      }
    },
    [recoilCart]
  );

  const removeCartItem = useCallback(
    (item: IItem) => {
      const setCartList = [...recoilCart.cartList];
      const removeIndex = setCartList.findIndex((i) => i.item_no === item.item_no);
      setCartList.splice(removeIndex, 1);

      defaultRecoilCartState.cartList = setCartList;
      setRecoilCart(defaultRecoilCartState);
    },
    [recoilCart]
  );

  const paginationProducts = pagination(sortProductsItems, currentPage, pageSize);

  return (
    <Container>
      <Wrapper>
        {paginationProducts
          .sort((a: IItem, b: IItem) => b.score - a.score)
          .map((item: IItem) => {
            return (
              <Item
                key={item.item_no}
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
