import { FormFilter } from './HeroFilter/HeroFilter';
import { useSelector } from 'react-redux';
import { selectRandomHotelPhoto } from '../../../modules/hotelList/selectors/randomHotelPhotoSelector';
import { Photo } from '../../types/room';

export const Hero = () => {
  const { url, alt }: Photo = useSelector(selectRandomHotelPhoto);

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
