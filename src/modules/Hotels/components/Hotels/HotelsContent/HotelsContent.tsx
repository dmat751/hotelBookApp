import { useAppSelector } from '@store/hooks';
import { HotelItem } from '@/modules/Hotels/components/Hotels/HotelItem/HotelItem';
import { selectFilteredHotels } from '@/modules/Hotels/selectors';
import baseClasses from '@/app/assets/baseClasses.module.scss';
import { useMemo } from 'react';

export const HotelsContent = () => {
  const filteredHotels = useAppSelector(selectFilteredHotels);

  const hotels = useMemo(
    () =>
      filteredHotels.map((hotelItem) => (
        <HotelItem hotelItem={hotelItem} key={hotelItem.id} />
      )),
    [filteredHotels]
  );

  return <ul className={baseClasses['basic-container-1']}>{hotels}</ul>;
};
