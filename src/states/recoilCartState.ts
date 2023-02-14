import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export interface IItem {
  item_no: number;
  item_name: string;
  detail_image_url: string;
  price: number;
  score: number;
  availableCoupon: boolean;
  quantity: number;
  checked: boolean;
}

export interface CommonState {
  cartList: IItem[];
}

const initialState: CommonState = {
  cartList: [],
};

export const recoilCartState = atom({
  key: 'recoilCartsState',
  default: initialState,
  effects_UNSTABLE: [persistAtom],
});

// export const recoilCartSelector = selector({
//     key: 'recoilCartSelector',
//     get: ({get}) => {
//         return get(recoilCartState)
//     },
//     set: ({set}, value) => {
//         set(recoilCartState, value)
//     }
// });
