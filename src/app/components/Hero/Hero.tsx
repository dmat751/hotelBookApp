import FormFilter from './HeroFilter/HeroFilter';
import classes from './Hero.module.scss';

type Props = Readonly<{heroPhotoUrl: string; heroPhotoAlt: string}>
const Hero = ({heroPhotoUrl, heroPhotoAlt} : Props) => {
  return (
    <div className={classes.hero}>
      <div className={classes['hero__img-container']}>
        {heroPhotoUrl && (
          <img
            className={classes.hero__img}
            src={heroPhotoUrl}
            alt={heroPhotoAlt}
          />
        )}
      </div>
      <FormFilter />
    </div>
  );
};
export default Hero;
