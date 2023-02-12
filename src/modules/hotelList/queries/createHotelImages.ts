import { Photo } from './../types/room';
import { Hotel } from './../types/hotel';

export const createHotelImages = (hotelList: Hotel[]) =>
  hotelList
    .map(({ images }) =>
      images.map(({ alt, url }) => {
        const resultImage: Photo = {
          alt: alt ?? '',
          url: url ?? '',
        };

        return resultImage;
      })
    )
    .flat();
