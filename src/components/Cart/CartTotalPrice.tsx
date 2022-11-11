import React from 'react';
import styled from 'styled-components';
import { theme, FlexBetween, FlexCenter } from '@styles/theme';
import { Text18B, Text18R } from '@components/Shared/Text';
import { Button } from '@components/Shared/Button';
import { ICoupons, ICouponsResponse } from '@pages/cart/model';

interface IProps {
  fetchCouponList: ICouponsResponse;
  selectedCoupon: ICoupons;
  goToProducts: () => void;
  orderHandler: () => void;
  getTotalPriceNotDiscount: () => number;
}
const CartTotalPrice = ({
  fetchCouponList,
  selectedCoupon,
  goToProducts,
  orderHandler,
  getTotalPriceNotDiscount,
}: IProps) => {
  return (
    <Container>
      <TotalPriceWrapper>
        <Text18B padding="0 0 30px 0">결제정보</Text18B>
        <FlexBetween padding="0 0 20px 0">
          <Text18R>총 주문금액</Text18R>
          <Text18R>{String(getTotalPriceNotDiscount().toLocaleString())}원</Text18R>
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
        <Button className="cart-btn" onClick={orderHandler} width="235px" padding="10px 0" pointer border>
          ORDER
        </Button>
      </FlexCenter>
    </Container>
  );
};

const Container = styled.section``;

const TotalPriceWrapper = styled.div`
  padding: 30px 40px;
  border-top: 3px solid ${theme.black};
  border-bottom: 1px solid ${theme.black};
`;

export default CartTotalPrice;
