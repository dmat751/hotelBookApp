import { Photo } from '../../app/types/room';
import { getRandomNumber } from '../../app/queries/getRandomNumber';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectRandomHotelPhoto = createSelector(
  [selectAllHotelList],
  (hotelList) => {
    const imgArray = hotelList
      .map(({ images }) => {
        return images;
      })
      .flat();

    const randomImgArrayIndex = getRandomNumber(0, imgArray.length);
    if (randomImgArrayIndex !== -1) {
      return imgArray[randomImgArrayIndex];
    } else {
      const result: Photo = { alt: '', url: '' };
      return result;
    }
  }
);
