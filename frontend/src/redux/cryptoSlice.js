import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchCryptoStart: (state) => {
      state.loading = true;
    },
    fetchCryptoSuccess: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },
    fetchCryptoFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchCryptoStart, fetchCryptoSuccess, fetchCryptoFailure } = cryptoSlice.actions;

export const fetchCryptoData = () => async (dispatch) => {
  dispatch(fetchCryptoStart());
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false');
    dispatch(fetchCryptoSuccess(response.data));
  } catch (error) {
    dispatch(fetchCryptoFailure(error.message));
  }
};

export default cryptoSlice.reducer;
