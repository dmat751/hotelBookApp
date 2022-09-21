import { getRandomNumber } from '../../../app/queries/getRandomNumber';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectRandomHotelPhoto = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const imgArray = hotelList.map(({ images }) => images).flat();

    const randomImgArrayIndex = getRandomNumber(0, imgArray.length);
    return randomImgArrayIndex !== -1
      ? imgArray[randomImgArrayIndex]
      : { alt: '', url: '' };
  }
);
