import Hero from './components/Hero/Hero';
import HotelList from './components/HotelList/HotelList';
import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectHotelList } from './store';
import { Hotel } from './models/Hotel';

interface Photo {
  url: string;
  alt: string;
}

const getRandomInt = (min: number, max: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const selectRandonPhoto = (hotelListItem: Hotel[]): Photo => {
  let imgArray: Photo[] = [];
  hotelListItem.forEach((hotelItem) => {
    hotelItem.images.forEach((imgItem) => {
      imgArray.push(imgItem);
    });
  });
  let randomImgArrayIndex = getRandomInt(0, imgArray.length);
  if (imgArray[randomImgArrayIndex]) {
    return imgArray[randomImgArrayIndex];
  } else {
    const result: Photo = { alt: '', url: '' };
    return result;
  }
};

function App() {
  const hotelListItem = useSelector(selectHotelList);

  let randomPhoto: Photo = { alt: '', url: '' };
  try {
    randomPhoto = selectRandonPhoto(hotelListItem.hotelList);
  } catch (error) {
    randomPhoto.alt = '';
    randomPhoto.url = '';
  }

  return (
    <Fragment>
      <Hero
        heroPhotoUrl={randomPhoto.url}
        heroPhotoAlt={randomPhoto.alt}
      ></Hero>
      <HotelList></HotelList>
    </Fragment>
  );
}

export default App;
