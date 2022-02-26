import { RoomsDetails } from './Room';

export interface Hotel {
  address1: string;
  address2: string;
  checkInHours: string;
  checkInMinutes: string;
  checkOutHours: string;
  checkOutMinutes: string;
  country: string;
  countryCode: string;
  description: string;
  email: string;
  facilities: { code: string }[];
  id: string;
  images: { url: string; alt: string }[];
  name: string;
  position: {
    latitude: string;
    longitude: string;
    timezone: string;
  };
  postcode: string;
  starRating: number;
  telephone: string;
  town: string;
  roomsDetails: RoomsDetails;
}
