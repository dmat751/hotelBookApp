import {Photo} from "./Photo";

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

type Facility = {
  code: string;
  name: string;
};

