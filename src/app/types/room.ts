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
  images: Image[];
  longDescription: string;
  name: string;
  occupancy: { maxAdults: number; maxChildren: number; maxOverall: number };
  shortDescription: string;
};

export type Facility = {
  code: string;
  name: string;
};

export type Image = {
  url: string;
  alt: string;
};
