import React from 'react';
import styled from 'styled-components';
import { ICouponsResponse, ICoupons } from '@pages/cart/model';

interface IProps {
  couponList: ICouponsResponse;
  selectCouponHandler: (coupon: string) => void;
  availableCouponItem: () => boolean | undefined;
}
const Coupon = ({ couponList, selectCouponHandler, availableCouponItem }: IProps) => {
  return (
    <Container>
      <SelectCoupon
        disabled={!availableCouponItem()}
        name="select"
        onChange={(e) => selectCouponHandler(e.target.value)}
      >
        {couponList.coupons.map((item: ICoupons, idx: number) => {
          return (
            <option key={idx} value={item.type}>
              {item.title}
            </option>
          );
        })}
        <option value="none">쿠폰 미적용</option>
      </SelectCoupon>
    </Container>
  );
};

const Container = styled.section``;

const SelectCoupon = styled.select``;

export default Coupon;
