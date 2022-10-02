import { FormFilter } from './HeroFilter/HeroFilter';
import { useSelector } from 'react-redux';
import { selectRandomHotelPhoto } from '../../../modules/hotelList/selectors/randomHotelPhotoSelector';

export const Hero = () => {
  const { url, alt } = useSelector(selectRandomHotelPhoto);

  return (
    <div className="w-full md:mb-[50px] relative">
      <div className="bg-[#868686] h-[300px]">
        {url && (
          <img
            className="w-full h-full object-cover block"
            src={url}
            alt={alt}
          />
        )}
      </div>
      <FormFilter />
    </div>
  );
};
