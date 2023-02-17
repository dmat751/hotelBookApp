import { Notification } from '../../../../components/Notification/Notification';
import { HotelsContent } from './HotelsContent/HotelsContent';
import { Spinner } from '../../../../components/Spinner/Spinner';
import { useAppSelector } from '../../../../app/store/hooks';
import { useGetHotelsQuery } from '../../Api';
import { selectNumberOfFilteredHotels } from '../../Selectors';

export const Hotels = () => {
  const numberOfHotels = useAppSelector(selectNumberOfFilteredHotels);
  const { isLoading, isError } = useGetHotelsQuery();

  const canShowHotelList = !isLoading && !isError;
  const isHotelsNoFoundNotificationVisible =
    numberOfHotels === 0 && canShowHotelList;

  return (
    <div className="flex flex-col items-center">
      {canShowHotelList && <HotelsContent />}
      {isLoading && <Spinner />}
      {isError && (
        <Notification message="Sorry, can't fetch data" msgType="error" />
      )}
      {isHotelsNoFoundNotificationVisible && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
