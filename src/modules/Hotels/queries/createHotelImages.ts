import type { Hotel } from '@/modules/Hotels/types/Hotel';
import type { Photo } from '@/modules/Hotels/types/Photo';

export const createHotelImages = (hotels: Hotel[]): Photo[] =>
  hotels.flatMap(({ images }) =>
    images.map(({ alt = '', url = '' }) => ({ alt, url }))
  );
