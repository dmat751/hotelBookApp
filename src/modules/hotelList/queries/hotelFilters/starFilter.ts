import type { Hotel } from './../../types/hotel';

export const starFilter = (hotelList: Hotel[], starAmount: number): Hotel[] =>
  hotelList.filter(({ starRating }) => starRating >= starAmount);
