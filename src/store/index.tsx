import { configureStore } from '@reduxjs/toolkit';
import hotelListSlice from './hotelListSlice';

const store = configureStore({
  reducer: {
    hotelList: hotelListSlice.reducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
export const selectHotelList = (state: RootState) => state.hotelList.hotelList;

export default store;
