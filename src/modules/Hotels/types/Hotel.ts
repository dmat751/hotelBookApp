import { Photo } from '@/modules/Hotels/types/Photo';
import { RoomsDetails } from '@/modules/Hotels/types/RoomDetails';

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
