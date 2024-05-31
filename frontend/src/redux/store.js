import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk'; // Use named export
import cryptoReducer from './cryptoSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
