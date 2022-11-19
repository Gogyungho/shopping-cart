import { ICoupons, ICouponsResponse } from '@pages/cart/model';
import { IItem } from '@pages/products/model';

const getTotalPrice = (couponsList: ICouponsResponse, checkedItem: any): any => {
  // 할인 금액과 총 주문 금액
  const totalPriceObj = {
    totalPrice: 0,
    rateDiscountPrice: 0,
    amountDiscountPrice: 0,
  };
  const discountRate = couponsList?.coupons.find((value: ICoupons) => value.type === 'rate')?.discountRate!;
  const discountAmount = couponsList?.coupons.find((value: ICoupons) => value.type === 'amount')?.discountAmount;
  checkedItem.map((item: IItem) => {
    totalPriceObj.totalPrice += item.price * item.quantity;
    if (item.availableCoupon !== false) {
      totalPriceObj.rateDiscountPrice += Math.floor((item.price * item.quantity * discountRate) / 100);
      totalPriceObj.amountDiscountPrice = discountAmount;
    }
  });
  return { ...totalPriceObj };
};

export default getTotalPrice;
