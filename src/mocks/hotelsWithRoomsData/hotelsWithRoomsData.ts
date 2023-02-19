import { Hotel } from '@/modules/Hotels/types/Hotel';
import data from './hotelsWithRoomsData.json';

export const fetchedHotelsWithRoomsData: Hotel[] = data as unknown as Hotel[];
