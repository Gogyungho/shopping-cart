export interface ICouponsResponse {
  coupons: ICoupons[];
}

export interface ICoupons {
  type: string;
  title: string;
  discountRate: number;
  discountAmount: number;
}
