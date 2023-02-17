import type { Hotel } from '../types/Hotel';
import { Photo } from '../types/Photo';

export const createHotelImages = (hotels: Hotel[]): Photo[] =>
  hotels.flatMap(({ images }) =>
    images.map(({ alt = '', url = '' }) => ({ alt, url }))
  );
