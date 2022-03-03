export interface RoomsDetails {
  ratePlans: RatePlan[];
  rooms: Room[];
}

export interface RatePlan {
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
}

export interface Room {
  bedConfiguration: string;
  disabledAccess: boolean;
  facilities: Facility[];
  id: string;
  images: Image[];
  longDescription: string;
  name: string;
  occupancy: { maxAdults: number; maxChildren: number; maxOverall: number };
  shortDescription: string;
}

export interface Facility {
  code: string;
  name: string;
}

export interface Image {
  url: string;
  alt: string;
}
