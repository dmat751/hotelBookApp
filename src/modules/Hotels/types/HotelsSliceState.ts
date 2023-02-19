import { Hotel } from './Hotel';

export type HotelsSliceState = {
  hotels: Hotel[];
  status: 'idle' | 'pending' | 'resolved';
  isError: boolean;
  errorMessage: string;
};
