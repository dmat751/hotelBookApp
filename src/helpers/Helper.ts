import { Hotel } from '../app/types/hotel';
import { Image } from '../app/types/room';

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return min === max ? -1 : Math.floor(Math.random() * (max - min)) + min;
};

export const selectRandomPhoto = (hotelListItem: Hotel[]): Image => {
  let imgArray: Image[] = [];
  hotelListItem.forEach((hotelItem) => {
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
