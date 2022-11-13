import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { theme, FlexBetween, FlexCenter } from '@styles/theme';
import { Text18B, Text18R } from '@components/Shared/Text';
import { Button } from '@components/Shared/Button';
import { ICoupons, ICouponsResponse } from '@pages/cart/model';

interface IProps {
  fetchCouponList: ICouponsResponse;
  goToProducts: () => void;
  orderHandler: () => void;
  availableCouponItem: () => boolean;
  getTotalPrice: () => any;
}

const CartTotalPriceWithCoupons = ({
  fetchCouponList,
  goToProducts,
  orderHandler,
  availableCouponItem,
  getTotalPrice,
}: IProps) => {
  const [selectedDiscountPrice, setSelectedDiscountPrice] = useState<number>(0);

  const getTotalPriceObj = getTotalPrice();
  const availableCouponsItem = availableCouponItem();

  useEffect(() => {
    if (!availableCouponsItem) {
      setSelectedDiscountPrice(0);
    }
  }, [getTotalPriceObj]);

  const selectCouponHandler = useCallback(
    (value: string): void => {
      if (value === 'rate') {
        setSelectedDiscountPrice(getTotalPriceObj.rateDiscountPrice);
      } else if (value === 'amount') {
        setSelectedDiscountPrice(getTotalPriceObj.amountDiscountPrice);
      } else if (value === 'none') {
        setSelectedDiscountPrice(0);
      }
    },
    [getTotalPriceObj]
  );

  return (
    <Container>
      {fetchCouponList.coupons.length > 0 && (
        <CouponWrapper>
          <Text18B padding="0 15px 2px 0">사용가능한 쿠폰</Text18B>
          <SelectCoupon
            disabled={!availableCouponsItem}
            name="select"
            defaultValue="none"
            onChange={(e) => selectCouponHandler(e.target.value)}
          >
            {fetchCouponList.coupons.map((item: ICoupons, idx: number) => {
              return (
                <option key={idx} value={item.type}>
                  {item.title}
                </option>
              );
            })}
            <option value="none">---</option>
          </SelectCoupon>
        </CouponWrapper>
      )}

      <TotalPriceWrapper>
        <Text18B padding="0 0 30px 0">결제정보</Text18B>
        <FlexBetween padding="0 0 20px 0">
          <Text18R>총 주문금액</Text18R>
          <Text18R>{String(getTotalPriceObj.totalPrice.toLocaleString())}원</Text18R>
        </FlexBetween>
        {fetchCouponList.coupons.length > 0 && (
          <FlexBetween padding="0 0 20px 0">
            <Text18R>쿠폰적용 금액</Text18R>
            <Text18R color={theme.brandRed}>{selectedDiscountPrice.toLocaleString()}원</Text18R>
          </FlexBetween>
        )}
        <FlexBetween padding="0 0 20px 0">
          <Text18B>총 결제금액</Text18B>
          <Text18B>{(getTotalPriceObj.totalPrice - selectedDiscountPrice).toLocaleString()}원</Text18B>
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

const CouponWrapper = styled.section`
  margin-bottom: 50px;
  display: flex;
`;

const SelectCoupon = styled.select``;

export default CartTotalPriceWithCoupons;
