import classes from './App.module.scss';
import Hero from './components/Hero/Hero';
import HotelList from './components/HotelList/HotelList';
import { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectHotelList } from './store';

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function App() {
  const hotelListItem = useSelector(selectHotelList);

  let heroUrl;
  let heroAlt;

  try {
    heroUrl = hotelListItem.hotelList[0].images[0].url;
    heroAlt = hotelListItem.hotelList[0].images[0].alt;
  } catch (error) {
    heroUrl = '';
    heroAlt = '';
  }

  return (
    <Fragment>
      <Hero heroPhotoUrl={heroUrl} heroPhotoAlt={''}></Hero>
      <HotelList></HotelList>
    </Fragment>
  );
}

export default App;
