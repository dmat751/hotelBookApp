import { Photo } from './../../../app/types/room';
import { getRandomNumber } from '../../../app/queries/getRandomNumber';
import { createSelector } from '@reduxjs/toolkit';
import { selectAllHotelList } from './allHotelListSelector';

export const selectRandomHotelPhoto = createSelector(
  [selectAllHotelList],
  (hotelList): Photo => {
    const defaultResult: Photo = { alt: '', url: '' };
    let imgArray: Photo[] = hotelList.map(({ images }) => images).flat();
    if (imgArray.length === 0) {
      return defaultResult;
    }

    imgArray = imgArray.map((item) => {
      if (!Object.prototype.hasOwnProperty.call(item, 'alt')) {
        const result: Photo = { alt: '', url: item.url };
        return result;
      }
      return item;
    });

    const randomImgArrayIndex = getRandomNumber(0, imgArray.length - 1);

    return randomImgArrayIndex !== -1
      ? imgArray[randomImgArrayIndex]
      : defaultResult;
  }
);
