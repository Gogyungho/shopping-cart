import { combineReducers, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import cart from '../cart';

const rootReducer = (state: any, action: AnyAction): CombinedState<any> => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    cart,
  })(state, action);
};

export default rootReducer;
