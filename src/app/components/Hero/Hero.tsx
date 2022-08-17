import { FormFilter } from './HeroFilter/HeroFilter';
import classes from './Hero.module.scss';
import { useSelector } from 'react-redux';
import { selectRandomHotelPhoto } from '../../../modules/hotelList/randomHotelPhotoSelector';

export const Hero = () => {
  const { url, alt } = useSelector(selectRandomHotelPhoto);
  //TODO: ask about rerender component

  return (
    <div className={classes.hero}>
      <div className={classes['hero__img-container']}>
        {url && <img className={classes.hero__img} src={url} alt={alt} />}
      </div>
      <FormFilter />
    </div>
  );
};
