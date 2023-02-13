import type { Photo } from './../types/room';
import type { Hotel } from './../types/hotel';

export const createHotelImages = (hotelList: Hotel[]): Photo[] =>
  hotelList.flatMap(({ images }) =>
    images.map(({ alt = '', url = '' }) => ({ alt, url }))
  );
