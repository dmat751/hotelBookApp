import classes from './Slider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';

type Props = Readonly<{ images: { url: string; alt: string }[] }>;
export const Slider = ({ images }: Props) => {
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
        {images.map((item, index) => {
          return (
            <SwiperSlide key={index}>
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
