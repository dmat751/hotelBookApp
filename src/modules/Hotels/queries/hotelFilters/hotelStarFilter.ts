import type { Hotel } from '../../types/Hotel';

export const hotelStarFilter = (
  hotelList: Hotel[],
  starAmount: number
): Hotel[] => hotelList.filter(({ starRating }) => starRating >= starAmount);
