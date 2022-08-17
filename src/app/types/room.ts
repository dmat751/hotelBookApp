export type RoomsDetails = {
  ratePlans: RatePlan[];
  rooms: Room[];
};

export type RatePlan = {
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

export type Room = {
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: Facility[];
  id: string;
  images: Photo[];
  longDescription: string;
  name: string;
  occupancy: Occupancy;
  shortDescription: string;
};

type Occupancy = {
  maxAdults: number;
  maxChildren: number;
  maxOverall: number;
};

export type Facility = {
  code: string;
  name: string;
};

export type Photo = {
  url: string;
  alt: string;
};
