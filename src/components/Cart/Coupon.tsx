import React, { useState } from 'react';
import styled from 'styled-components';
import { ICouponsResponse, ICoupons } from '@pages/cart/model';

interface IProps {
  couponList: ICouponsResponse;
  selectedCoupon: ICoupons;
  selectCouponHandler: (coupon: string) => void;
}
const Coupon = ({ couponList, selectedCoupon, selectCouponHandler }: IProps) => {
  return (
    <Container>
      <SelectCoupon name="select" onChange={(e) => selectCouponHandler(e.target.value)}>
        {couponList.coupons.map((item: ICoupons, idx: number) => {
          return (
            <option key={idx} value={item.type}>
              {item.title}
            </option>
          );
        })}
        <option value="none">미적용</option>
      </SelectCoupon>
    </Container>
  );
};

const Container = styled.section``;

const SelectCoupon = styled.select``;

export default Coupon;
