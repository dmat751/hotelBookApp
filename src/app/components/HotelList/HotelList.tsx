import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../modules/hotelList/hotelListAction';
import { spinner } from '../../../UI/Spinner/Spinner';
import { selectApiQueryStatus } from '../../../modules/apiStatus/ApiStatusSelector';
import { selectIsFiltersLoading } from '../../../modules/hotelFilters/hotelFiltersSelectors';
import { Notification } from '../../../UI/Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { selectFilteredHotelList } from '../../../modules/hotelList/filteredHotelListSelector';

export const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListLength = useSelector(selectFilteredHotelList).length;
  const {
    isError: isApiError,
    isLoading: isApiLoading,
    notification: apiNotification,
  } = useSelector(selectApiQueryStatus);
  const isFiltersLoading = useSelector(selectIsFiltersLoading);

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  const isSpinnerVisible = isFiltersLoading || isApiLoading;
  const isContentVisible = !isFiltersLoading && !isApiLoading;
  const isVisibleHotelsNoFoundNotification =
    hotelListLength === 0 && !isSpinnerVisible;

  return (
    <div className="flex flex-col items-center">
      {isContentVisible && <HotelListContent />}
      {isSpinnerVisible && spinner}
      {isApiError && <Notification message={apiNotification} msgType="error" />}
      {isVisibleHotelsNoFoundNotification && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
