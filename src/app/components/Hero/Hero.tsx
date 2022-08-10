import FormFilter from './HeroFilter/HeroFilter';
import classes from './Hero.module.scss';

const Hero: React.FC<{ heroPhotoUrl: string; heroPhotoAlt: string }> = (
  props
) => {
  return (
    <div className={classes.hero}>
      <div className={classes['hero__img-container']}>
        {props.heroPhotoUrl && (
          <img
            className={classes.hero__img}
            src={props.heroPhotoUrl}
            alt={props.heroPhotoAlt}
          />
        )}
      </div>
      <FormFilter />
    </div>
  );
};
export default Hero;
