import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';
import type { Photo } from '@/modules/Hotels/types/Photo';
import { useMemo } from 'react';

const sliderContainerClassNames =
  'md:order-[-1] order-2 h-[200px] max-w-[300px] w-full b-[#CCCCCC]';

type Props = Readonly<{ images: Photo[] }>;

export const Slider = ({ images }: Props) => {
  const slides = useMemo(
    () =>
      images.map((item) => (
        <SwiperSlide key={item.url}>
          <img
            className="w-full h-full object-cover"
            src={item.url}
            alt={item.alt}
          />
        </SwiperSlide>
      )),
    [images]
  );

  return (
    <div className={sliderContainerClassNames}>
      <Swiper
        style={{ height: '100%' }}
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        {slides}
      </Swiper>
    </div>
  );
};
