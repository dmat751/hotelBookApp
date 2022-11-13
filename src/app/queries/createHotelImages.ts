import { Photo } from './../types/room';
import { Hotel } from './../types/hotel';

export const createHotelImages = (hotelList: Hotel[]) =>
  hotelList
    .map(({ images }) =>
      images.map((image) => {
        const resultImage: Photo = {
          alt: image?.alt ? image.alt : '',
          url: image?.url ? image.url : '',
        };

        return resultImage;
      })
    )
    .flat();
