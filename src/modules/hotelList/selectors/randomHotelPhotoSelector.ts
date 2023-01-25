import { createHotelImages } from './../../../app/queries/createHotelImages';
import { Photo } from './../../../app/types/room';
import { getRandomNumber } from '../../../app/queries/getRandomNumber';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectRandomHotelPhoto = createSelector(
  [selectAllHotelList],
  (hotelList): Photo => {
    const defaultResult: Photo = { alt: '', url: '' };
    const imgArray: Photo[] = createHotelImages(hotelList);

    if (imgArray.length === 0) {
      return defaultResult;
    }

    const randomImgArrayIndex = getRandomNumber(0, imgArray.length - 1);

    return randomImgArrayIndex !== -1
      ? imgArray[randomImgArrayIndex]
      : defaultResult;
  }
);
