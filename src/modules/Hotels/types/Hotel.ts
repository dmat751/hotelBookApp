import { Photo } from './Photo';
import { RoomsDetails } from './RoomDetails';

export type Hotel = {
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
  images: Photo[];
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
};