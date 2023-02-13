import { Notification } from '../Notification/Notification';
import { HotelsContent } from './HotelsContent/HotelsContent';
import { spinner } from '../Spinner/Spinner';
import { useAppSelector } from '../../app/store/hooks';
import {selectMaxAdultsInHotels} from "../../modules/Hotels/selectors";
import {useGetHotelsQuery} from "../../modules/Hotels/api/hotelsApiSlice";

export const Hotels = () => {
  const hotelListLength = useAppSelector(selectMaxAdultsInHotels);
  const { isLoading, isError } = useGetHotelsQuery();

  const canShowHotelList = !isLoading && !isError;
  const isHotelsNoFoundNotificationVisible =
    hotelListLength === 0 && !isLoading;

  return (
    <div className="flex flex-col items-center">
      {canShowHotelList && <HotelsContent />}
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
