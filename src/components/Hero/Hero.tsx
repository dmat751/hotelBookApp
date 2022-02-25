import classes from './Hero.module.scss';

const Hero: React.FC<{ heroPhotoUrl: string; heroPhotoAlt: string }> = (
  props
) => {
  return (
    <div className={classes.hero}>
      <img
        className={classes.hero__img}
        src={props.heroPhotoUrl}
        alt={props.heroPhotoAlt}
      />
    </div>
  );
};
export default Hero;