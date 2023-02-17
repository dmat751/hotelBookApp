import { Hotel } from './Hotel';

export type HotelsSliceState = {
  hotels: Hotel[];
  status: 'pending' | 'resolved';
  isError: boolean;
  errorMessage: string;
};
