import { useSelector } from 'react-redux';
import { selectRandomHotelPhoto } from '../../../modules/hotelList/selectors/selectRandomHotelPhoto';

export const HeroBackground = () => {
  const { url, alt } = useSelector(selectRandomHotelPhoto);

  return (
    <div className="bg-[#868686] h-[300px]">
      {url && (
        <img className="w-full h-full object-cover block" src={url} alt={alt} />
      )}
    </div>
  );
};
