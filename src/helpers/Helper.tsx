import { Hotel } from '../types/hotel';

export const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (min === max) {
    return -1;
  } else {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};

export type Photo = {
  url: string;
  alt: string;
}

export const selectRandomPhoto = (hotelListItem: Hotel[]): Photo => {
  let imgArray: Photo[] = [];
  hotelListItem.forEach((hotelItem) => {
    hotelItem.images.forEach((imgItem) => {
      imgArray.push(imgItem);
    });
  });
  let randomImgArrayIndex = getRandomInt(0, imgArray.length);
  if (randomImgArrayIndex !== -1) {
    return imgArray[randomImgArrayIndex];
  } else {
    const result: Photo = { alt: '', url: '' };
    return result;
  }
};
