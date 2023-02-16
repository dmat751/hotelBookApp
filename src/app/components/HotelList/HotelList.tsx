import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Spinner } from '../../../UI/Spinner/Spinner';
import { Notification } from '../../../UI/Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { selectFilteredHotelList } from '../../../modules/hotelList/selectors/filteredHotelListSelector';
import { fetchData } from '../../../modules/hotelList/hotelListSlice';
import {
  selectErrorType,
  selectIsDataError,
  selectIsDataStatus,
} from '../../../modules/hotelList/selectors/dataStatusSelectors';

export const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListLength = useSelector(selectFilteredHotelList).length;
  const dataStatus = useSelector(selectIsDataStatus);
  const apiNotification = useSelector(selectErrorType);
  const isApiError = useSelector(selectIsDataError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isContentVisible = dataStatus === 'resolved';
  const isVisibleHotelsNoFoundNotification =
    hotelListLength === 0 && isContentVisible;

  return (
    <div className="flex flex-col items-center">
      {isContentVisible && <HotelListContent />}
      {!isContentVisible && <Spinner />}
      {isApiError && <Notification message={apiNotification} msgType="error" />}
      {isVisibleHotelsNoFoundNotification && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
