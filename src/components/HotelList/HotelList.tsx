import { Notification } from '../Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { useGetHotelListQuery } from '../../modules/hotelList/api/hotelListApiSlice';
import { spinner } from '../Spinner/Spinner';
import { useAppSelector } from '../../app/store/hooks';
import {selectMaxAdultsInHotels} from "../../modules/hotelList/selectors";

export const HotelList = () => {
  const hotelListLength = useAppSelector(selectMaxAdultsInHotels);
  const { isLoading, isError } = useGetHotelListQuery();

  const canShowHotelList = !isLoading && !isError;
  const isHotelsNoFoundNotificationVisible =
    hotelListLength === 0 && !isLoading;

  return (
    <div className="flex flex-col items-center">
      {canShowHotelList && <HotelListContent />}
      {isLoading && spinner}
      {isError && (
        <Notification message="Sorry, can't fetch data" msgType="error" />
      )}
      {isHotelsNoFoundNotificationVisible && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
