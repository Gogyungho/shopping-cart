import React, { useState } from 'react';
import styled from 'styled-components';
import { theme, FlexCol, FlexBetween, FlexCenter } from '@styles/theme';
import { Text24B, Text18B, Text18R } from '@components/Shared/Text';
import { Button } from '@components/Shared/Button';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { cartForm } from '@store/cart';
import { CartItem, Coupon } from '@components/Cart';
import couponData from '@api/coupon.json';
import { ICoupons } from '@pages/cart/model';

const CART_ITEM_LIST = [
  {
    item_no: 122997,
    item_name: '스탠리 클래식 런치박스',
    detail_image_url: 'https://img.29cm.co.kr/contents/itemDetail/201702/cut4_320170216150109.jpg?width=500',
    price: 75000,
    score: 200,
  },
  {
    item_no: 768848,
    item_name: '[STANLEY] GO CERAMIVAC 진공 텀블러/보틀 473ml',
    detail_image_url:
      'https://img.29cm.co.kr/next-product/2020/11/23/18a5303591f446e79b806945347e7473_20201123143211.jpg?width=500',
    price: 42000,
    score: 300,
  },
];

const CartPage = () => {
  const fetchCouponList = JSON.parse(JSON.stringify(couponData));
  const [selectedCoupon, setSelectedCoupon] = useState<ICoupons>(fetchCouponList.coupons[0]);

  const { cartLists } = useSelector(cartForm);
  const router = useRouter();
  const goToProducts = () => {
    router.push('/products');
  };

  const selectCouponHandler = (coupon: string): void => {
    const filterdCoupon = fetchCouponList.coupons.find((i: ICoupons) => i.type === coupon);
    setSelectedCoupon({ ...filterdCoupon });
  };

  return (
    <Container>
      {cartLists.length === 0 ? (
        <FlexCol width="100%">
          <CartListWrapper>
            <Text18B padding="0 0 10px 20px">상품정보</Text18B>
            {CART_ITEM_LIST.map((item, idx) => {
              return <CartItem key={idx} item={item} />;
            })}
          </CartListWrapper>
          {fetchCouponList.coupons.length > 0 && (
            <CouponWrapper>
              <Text18B padding="0 15px 2px 0">사용가능한 쿠폰</Text18B>
              <Coupon
                couponList={fetchCouponList}
                selectedCoupon={selectedCoupon}
                selectCouponHandler={selectCouponHandler}
              />
            </CouponWrapper>
          )}
          <TotalPriceWrapper>
            <Text18B padding="0 0 30px 0">결제정보</Text18B>
            <FlexBetween padding="0 0 20px 0">
              <Text18R>총 주문금액</Text18R>
              <Text18R>24,000원</Text18R>
            </FlexBetween>
            {fetchCouponList.coupons.length > 0 && (
              <FlexBetween padding="0 0 20px 0">
                <Text18R>쿠폰적용</Text18R>
                <Text18R>{selectedCoupon.title}</Text18R>
              </FlexBetween>
            )}
            <FlexBetween padding="0 0 20px 0">
              <Text18B>총 결제금액</Text18B>
              <Text18B>124,000원</Text18B>
            </FlexBetween>
          </TotalPriceWrapper>
          <FlexCenter padding="30px 0 40px 0">
            <Button
              className="cart-btn"
              onClick={goToProducts}
              width="235px"
              margin="0 20px 0 0"
              padding="10px 0"
              pointer
              border
            >
              CONTINUE SHOPPING
            </Button>
            <Button className="cart-btn" onClick={goToProducts} width="235px" padding="10px 0" pointer border>
              ORDER
            </Button>
          </FlexCenter>
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

const TotalPriceWrapper = styled.section`
  padding: 30px 40px;
  border-top: 3px solid ${theme.black};
  border-bottom: 1px solid ${theme.black};
`;

const CouponWrapper = styled.section`
  margin-bottom: 50px;
  display: flex;
`;

export default CartPage;
