import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { persistStore } from 'redux-persist';
import rootReducer from './modules';

const isDev = process.env.NODE_ENV !== 'production';

const makeConfigureStore = (reducer: any) =>
  configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(),
    devTools: isDev,
  });

const store = configureStore({
  reducer: rootReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
  ],
  devTools: isDev,
});

const makeStore = () => {
  const isServer = typeof window === 'undefined';

  if (isServer) {
    // server
    return makeConfigureStore(rootReducer);
  } else {
    const { persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;

    // client
    const persistConfig = {
      key: 'nextjs',
      storage,
      whitelist: ['cart'],
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store: any = makeConfigureStore(persistedReducer);

    store.__persistor = persistStore(store);

    return store;
  }
};

// export const persistor = persistStore(store); // persist store 내보내기

export const wrapper = createWrapper(makeStore, {
  debug: isDev,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
