import { Photo } from './../types/room';
import { createHotelImages } from './../queries/createHotelImages';
import { selectAllHotelList } from './selectAllHotelList';
import { getRandomNumber } from '../../../app/utils/getRandomNumber';
import { createSelector } from '@reduxjs/toolkit';

export const selectRandomHotelPhoto = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const defaultResult: Photo = { alt: '', url: '' };
    console.log(hotelList.length);
    const imgArray: Photo[] = createHotelImages(hotelList);

    if (imgArray.length === 0) {
      return defaultResult;
    }

    const randomImgArrayIndex = getRandomNumber(0, imgArray.length - 1);

    return imgArray[randomImgArrayIndex];
  }
);
