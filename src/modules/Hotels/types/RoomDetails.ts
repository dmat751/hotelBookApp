import type { Room } from '@/modules/Hotels/types/Room';

export type RoomsDetails = {
  ratePlans: RatePlan[];
  rooms: Room[];
};

type RatePlan = {
  cancellationPolicy: {
    amount: number;
    applicable: string;
    hour: string;
    name: string;
    penalty: string;
    text: string;
  };

  id: string;
  longDescription: string;
  prePayment: string;
  shortDescription: string;
};
