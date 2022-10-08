import { getRandomNumber } from '../../../app/queries/getRandomNumber';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectRandomHotelPhoto = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const defaultResult = { alt: '', url: '' };
    const imgArray = hotelList.map(({ images }) => images).flat();

    if (imgArray.length === 0) {
      return defaultResult;
    }

    const randomImgArrayIndex = getRandomNumber(0, imgArray.length - 1);

    return randomImgArrayIndex !== -1
      ? imgArray[randomImgArrayIndex]
      : defaultResult;
  }
);
