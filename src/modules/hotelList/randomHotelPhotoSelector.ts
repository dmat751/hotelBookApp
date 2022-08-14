import { RootState } from '../../app/types/rootState';
import { Image } from '../../app/types/room';
import { getRandomInt } from '../../app/queries/getRandomNumber';

export const selectRandomHotelPhoto = (state: RootState) => {
  let imgArray: Image[] = [];
  state.hotelList.hotelList.forEach((hotelItem) => {
    hotelItem.images.forEach((imgItem) => {
      imgArray.push(imgItem);
    });
  });
  let randomImgArrayIndex = getRandomInt(0, imgArray.length);
  if (randomImgArrayIndex !== -1) {
    return imgArray[randomImgArrayIndex];
  } else {
    const result: Image = { alt: '', url: '' };
    return result;
  }
};
