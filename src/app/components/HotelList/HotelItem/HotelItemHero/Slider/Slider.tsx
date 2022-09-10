import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Swiper.scss';
import nextId from 'react-id-generator';

type Props = Readonly<{ images: { url: string; alt: string }[] }>;
export const Slider = ({ images }: Props) => (
  <div className="md:order-[-1] order-2 h-[200px] max-w-[300px] w-full b-[#CCCCCC]">
    <Swiper
      style={{ height: '100%' }}
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Navigation, Pagination]}
      className="mySwiper"
    >
      {images.map((item) => {
        return (
          <SwiperSlide key={nextId()}>
            <div className="w-full h-full">
              <img
                className="w-full h-full object-cover"
                src={item.url}
                alt={item.alt}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  </div>
);
