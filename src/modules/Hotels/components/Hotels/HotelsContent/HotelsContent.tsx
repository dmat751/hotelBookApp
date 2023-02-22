import { HotelItem } from '@/modules/Hotels/components/Hotels/HotelItem/HotelItem';
import { selectFilteredHotels } from '@/modules/Hotels/selectors';
import { useAppSelector } from '@store/hooks';
import baseClasses from '@/app/assets/baseClasses.module.scss';
import { useMemo } from 'react';

export const HotelsContent = () => {
  const filteredHotels = useAppSelector(selectFilteredHotels);

  return (
    <ul className={baseClasses['basic-container-1']}>
      {useMemo(
        () =>
          filteredHotels.map((hotelItem) => (
            <HotelItem hotelItem={hotelItem} key={hotelItem.id} />
          )),
        [filteredHotels]
      )}
    </ul>
  );
};
