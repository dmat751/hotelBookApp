import { configureStore } from '@reduxjs/toolkit';
import hotelListSlice from './hotelListSlice';
import { useDispatch } from 'react-redux';

const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectHotelList = (state: RootState) => state.hotelList.hotelList;

export type AppDispatch = typeof store.dispatch;

export default store;
