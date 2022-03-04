import Hero from './components/Hero/Hero';
import HotelList from './components/HotelList/HotelList';
import { useSelector } from 'react-redux';
import { selectHotelList } from './store';
import { Photo, selectRandomPhoto } from './helpers/Helper';

function App() {
  const hotelListItem = useSelector(selectHotelList);

  const randomPhoto = selectRandomPhoto(hotelListItem.hotelList);

  return (
    <>
      <Hero
        heroPhotoUrl={randomPhoto.url}
        heroPhotoAlt={randomPhoto.alt}
      ></Hero>
      <HotelList></HotelList>
    </>
  );
}

export default App;
