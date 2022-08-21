import classes from './HeroFilter.module.scss';
import { StarFilter } from './StarFilter/StarFilter';
import { FilterByChildren } from './FilterByChildren/FilterByChildren';
import { FilterByAdults } from './FilterByAdults/FilterByAdults';
import { useSelector } from 'react-redux';
import { selectMaxHotelStars } from '../../../../modules/hotelList/maxHotelStarsSelector';

export const FormFilter = () => {
  const hotelMaxStars = useSelector(selectMaxHotelStars);

  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        <StarFilter
          starColor1="#fff500"
          starColor2="transparent"
          maxHotelRateStarAmount={hotelMaxStars}
        />
        <FilterByChildren />
        <FilterByAdults />
      </div>
    </div>
  );
};
