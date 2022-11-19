import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { theme, FlexCol, FlexBetween } from '@styles/theme';
import { Text24B, Text18B } from '@components/Shared/Text';
import { Button } from '@components/Shared/Button';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { cartForm, INIT_CART_LISTS } from '@store/cart';
import { CartItem, CartTotalPriceWithCoupons } from '@components/Cart';
import couponData from '@pages/api/coupon.json';
import { IItem } from '@pages/products/model';
import getTotalPrice from '@utils/cart/getTotalPrice';

const CartPage = () => {
  const fetchCouponList = JSON.parse(JSON.stringify(couponData));
  const [productsArr, setProductsArr] = useState<IItem[]>([]);
  const { cartLists } = useSelector(cartForm);

  const router = useRouter();
  const dispatch = useDispatch();
  const foundChckedItem = productsArr.filter((i: IItem) => i.checked);

  const totalPriceObj = getTotalPrice(fetchCouponList, foundChckedItem);

  useEffect(() => {
    const arr = cartLists.map((i: IItem) => {
      return { ...i, quantity: 1, checked: false };
    });
    setProductsArr(arr);
  }, [cartLists]);

  const selectedCartItemHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      // 제품 체크박스 핸들러
      const value = Number(e.target.value);
      const changeChecked = productsArr.map((product: IItem) => {
        if (value === product.item_no) {
          return { ...product, checked: !product.checked };
        } else return product;
      });
      setProductsArr(changeChecked);
    },
    [productsArr]
  );

  const quantityHandler = useCallback(
    (type: string, id: number) => {
      // 제품 수량 핸들러
      if (type === 'plus') {
        const addQty = productsArr.map((product) => {
          if (id === product.item_no && product?.quantity! < 9) {
            return { ...product, quantity: product?.quantity! + 1 };
          } else return product;
        });
        setProductsArr(addQty);
      } else {
        const substractQty = productsArr.map((product) => {
          if (id === product.item_no && product?.quantity! > 1) {
            return { ...product, quantity: product?.quantity! - 1 };
          } else return product;
        });
        setProductsArr(substractQty);
      }
    },
    [productsArr]
  );

  const availableCouponItem = (): boolean => {
    return foundChckedItem.some(
      (i: IItem) => i.availableCoupon === undefined || (i.availableCoupon === undefined && i.availableCoupon === false)
    );
  };

  const goToProducts = () => {
    router.push('/products');
  };
  const orderHandler = () => {
    if (foundChckedItem.length) {
      alert('주문을 완료했습니다.');
    } else {
      alert('상품을 선택해 주세요.');
    }
  };

  const removeAllCartItems = () => {
    dispatch(INIT_CART_LISTS());
  };

  return (
    <Container>
      <FlexBetween padding="0 0 20px 0">
        <Text24B>장바구니</Text24B>
        <Text18B onClick={removeAllCartItems} pointer>
          전체삭제
        </Text18B>
      </FlexBetween>
      {cartLists.length > 0 ? (
        <FlexCol width="100%">
          <CartListWrapper>
            <Text18B padding="0 0 10px 20px">상품정보</Text18B>
            {productsArr.map((item, idx) => {
              return (
                <CartItem key={idx} item={item} onChange={selectedCartItemHandler} quantityHandler={quantityHandler} />
              );
            })}
          </CartListWrapper>
          <CartTotalPriceWithCoupons
            fetchCouponList={fetchCouponList}
            goToProducts={goToProducts}
            orderHandler={orderHandler}
            getTotalPrice={totalPriceObj}
            availableCouponItem={availableCouponItem}
          />
        </FlexCol>
      ) : (
        <EmptyCartWrapper>
          <Text24B center>장바구니가 비어있습니다.</Text24B>
          <Button
            className="cart-btn"
            onClick={goToProducts}
            width="235px"
            margin="20px 0 0 0"
            padding="10px 0"
            pointer
            border
          >
            CONTINUE SHOPPING
          </Button>
        </EmptyCartWrapper>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .cart-btn:hover {
    color: ${theme.brandRed};
  }
`;

const CartListWrapper = styled.section`
  width: 100%;
  padding: 30px 20px;
  margin-bottom: 50px;
  border-top: 3px solid ${theme.black};
  border-bottom: 1px solid ${theme.black};
  display: flex;
  flex-direction: column;
`;

const EmptyCartWrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  border-top: 3px solid ${theme.black};
  border-bottom: 1px solid ${theme.black};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default CartPage;
