import { useAppSelector } from '../../../app/store/hooks';
import {selectRandomHotelPhoto} from "../../../modules/Hotels/selectors";

export const HeroBackground = () => {
  const { url, alt } = useAppSelector(selectRandomHotelPhoto);

  return (
    <div className="bg-[#868686] h-[300px]">
      {url && (
        <img
          data-testid={url}
          className="w-full h-full object-cover block"
          src={url}
          alt={alt}
        />
      )}
    </div>
  );
};
