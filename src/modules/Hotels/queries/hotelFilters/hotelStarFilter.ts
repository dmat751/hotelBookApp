import type { Hotel } from '../../types/hotel';

export const hotelStarFilter = (
  hotelList: Hotel[],
  starAmount: number
): Hotel[] => hotelList.filter(({ starRating }) => starRating >= starAmount);
