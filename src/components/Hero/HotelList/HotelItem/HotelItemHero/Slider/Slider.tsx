import classes from './Slider.module.scss';
const component: React.FC<{ Images: { url: string; alt: string }[] }> = (
  props
) => {
  return <div className={classes.slider}>Slider</div>;
};
export default component;
