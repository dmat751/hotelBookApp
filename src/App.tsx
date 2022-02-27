import './App.scss';
import Hero from './components/Hero/Hero';
import HotelList from './components/Hero/HotelList/HotelList';
import { useSelector, useDispatch } from 'react-redux';
import { selectHotelList } from './store/index';
import { Fragment, useEffect } from 'react';
import { fetchHotelListData } from './store/hotelListAction';

const dummyUrl =
  'https://cdn.wallpaperhub.app/cloudcache/d/3/c/2/b/f/d3c2bf863b952ad8d93816729ce85bb0bbebcbc8.png';

function App() {
  const dispatch = useDispatch();
  const hotelList = useSelector(selectHotelList);

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  return (
    <Fragment>
      <Hero heroPhotoUrl={dummyUrl} heroPhotoAlt="dummy alt"></Hero>
      <HotelList dummyVar="rwf"></HotelList>
    </Fragment>
  );
}

export default App;
