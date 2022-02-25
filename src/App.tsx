import { Fragment } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
const dummyUrl =
  'https://cdn.wallpaperhub.app/cloudcache/d/3/c/2/b/f/d3c2bf863b952ad8d93816729ce85bb0bbebcbc8.png';

function App() {
  return (
    <Fragment>
      <Hero heroPhotoUrl={dummyUrl} heroPhotoAlt="dummy alt"></Hero>
    </Fragment>
  );
}

export default App;
