import type { Hotel } from '../types/Hotel';
import {Photo} from "../types/Photo";

export const createHotelImages = (hotelList: Hotel[]): Photo[] =>
  hotelList.flatMap(({ images }) =>
    images.map(({ alt = '', url = '' }) => ({ alt, url }))
  );
