import { Hotel } from './Hotel';

export type HotelListSliceState = {
  hotelList: Hotel[];
  status: 'pending' | 'resolved';
  isError: boolean;
  errorMessage: string;
};
