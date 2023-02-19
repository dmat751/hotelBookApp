import { Hotel } from '@/modules/Hotels/types/Hotel';

export type HotelsSliceState = {
  hotels: Hotel[];
  status: 'idle' | 'pending' | 'resolved';
  isError: boolean;
  errorMessage: string;
};
