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
  selectIsDataLoading,
} from '../../../modules/hotelList/selectors/dataStatusSelectors';

export const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListLength = useSelector(selectFilteredHotelList).length;
  const isDataLoading = useSelector(selectIsDataLoading);
  const apiNotification = useSelector(selectErrorType);
  const isApiError = useSelector(selectIsDataError);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const isContentVisible = !isDataLoading;
  const isVisibleHotelsNoFoundNotification =
    hotelListLength === 0 && !isDataLoading;

  return (
    <div className="flex flex-col items-center">
      {isContentVisible && <HotelListContent />}
      {isDataLoading && Spinner}
      {isApiError && <Notification message={apiNotification} msgType="error" />}
      {isVisibleHotelsNoFoundNotification && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
