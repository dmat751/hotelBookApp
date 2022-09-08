import classes from './HeroFilter.module.scss';
import { StarFilter } from './StarFilter/StarFilter';
import { FilterByChildren } from './FilterByChildren/FilterByChildren';
import { FilterByAdults } from './FilterByAdults/FilterByAdults';

export const FormFilter = () => {
  return (
    <div className={classes.filter}>
      <div className={classes.filter__content}>
        <StarFilter />
        <FilterByChildren />
        <FilterByAdults />
      </div>
    </div>
  );
};
