import { RootState } from '../../app/types/rootState';
import { Photo } from '../../app/types/room';
import { getRandomNumber } from '../../app/queries/getRandomNumber';

export const selectRandomHotelPhoto = (state: RootState) => {
  let imgArray: Photo[] = [];
  state.hotelList.hotelList.forEach((hotelItem) => {
    hotelItem.images.forEach((imgItem) => {
      imgArray.push(imgItem);
    });
  });
  let randomImgArrayIndex = getRandomNumber(0, imgArray.length);
  if (randomImgArrayIndex !== -1) {
    return imgArray[randomImgArrayIndex];
  } else {
    const result: Photo = { alt: '', url: '' };
    return result;
  }
};
