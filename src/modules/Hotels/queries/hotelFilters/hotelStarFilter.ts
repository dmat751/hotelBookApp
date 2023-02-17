import type { Hotel } from '../../types/Hotel';

export const hotelStarFilter = (hotels: Hotel[], starAmount: number): Hotel[] =>
  hotels.filter(({ starRating }) => starRating >= starAmount);
