import classes from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';
const component: React.FC<{ images: { url: string; alt: string }[] }> = (
  props
) => {
  return (
    <div className={classes.slider}>
      <Swiper
        style={{ height: '100%' }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {props.images.map((item) => {
          return (
            <SwiperSlide>
              <div className={classes['slider-item']}>
                <img className={classes.img} src={item.url} alt={item.alt} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};
export default component;
