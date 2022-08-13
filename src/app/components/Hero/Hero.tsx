import FormFilter from './HeroFilter/HeroFilter';
import classes from './Hero.module.scss';
import { useSelector } from 'react-redux';
import { selectRandomPhoto } from '../../../helpers/Helper';
import {selectHotelList} from "../../../modules/HotelList/hotelListSelector";

export const Hero = () => {
  const hotelListItem = useSelector(selectHotelList);

  const randomPhoto = selectRandomPhoto(hotelListItem.hotelList);
  return (
    <div className={classes.hero}>
      <div className={classes['hero__img-container']}>
        {randomPhoto.url && (
          <img
            className={classes.hero__img}
            src={randomPhoto.url}
            alt={randomPhoto.alt}
          />
        )}
      </div>
      <FormFilter />
    </div>
  );
};
