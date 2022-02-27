import classes from './App.module.scss';
import Hero from './components/Hero/Hero';
import HotelList from './components/Hero/HotelList/HotelList';
import { Fragment } from 'react';

const dummyUrl =
  'https://cdn.wallpaperhub.app/cloudcache/d/3/c/2/b/f/d3c2bf863b952ad8d93816729ce85bb0bbebcbc8.png';

function App() {
  return (
    <Fragment>
      <Hero heroPhotoUrl={dummyUrl} heroPhotoAlt="dummy alt"></Hero>
      <HotelList></HotelList>
    </Fragment>
  );
}

export default App;
