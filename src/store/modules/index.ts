import { combineReducers, AnyAction, CombinedState } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import cart from '../cart';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'nextjs', // localStorage key
  storage, // localStorage
  whitelist: ['cart'], // target (reducer name)
};
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

export default persistReducer(persistConfig, rootReducer);
