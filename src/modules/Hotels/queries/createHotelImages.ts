import { Hotel } from '@/modules/Hotels/types/Hotel';
import { Photo } from '@/modules/Hotels/types/Photo';

export const createHotelImages = (hotels: Hotel[]): Photo[] =>
  hotels.flatMap(({ images }) =>
    images.map(({ alt = '', url = '' }) => ({ alt, url }))
  );
