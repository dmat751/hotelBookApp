import classes from './HotelList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../modules/hotelList/hotelListAction';
import { spinner } from '../../../UI/Spinner/Spinner';
import { selectIsFiltersLoading } from '../../../modules/hotelFilters/hotelFiltersSelectors';
import { Notification } from '../../../UI/Notification/Notification';
import { HotelListContent } from './HotelListContent/HotelListContent';
import { selectFilteredHotelList } from '../../../modules/hotelList/filteredHotelListSelector';
import { selectHotelListStatus } from '../../../modules/hotelList/statusSelector';
import { selectHotelListError } from '../../../modules/hotelList/errorSelector';

export const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListLength = useSelector(selectFilteredHotelList).length;
  const isFiltersLoading = useSelector(selectIsFiltersLoading);
  const dataStatus = useSelector(selectHotelListStatus);
  const isDataError = useSelector(selectHotelListError);

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  const isApiLoading = dataStatus === 'loading';
  const isSpinnerVisible = isFiltersLoading || isApiLoading;
  const isContentVisible = !isFiltersLoading && !isApiLoading && !isDataError;
  const isHotelsNoFoundNotificationVisible =
    hotelListLength === 0 && !isSpinnerVisible;

  return (
    <div className={classes['list-container']}>
      {isContentVisible && <HotelListContent />}
      {isSpinnerVisible && spinner}
      {isDataError && <Notification message={isDataError} msgType="error" />}
      {isHotelsNoFoundNotificationVisible && (
        <Notification message="We can not find any hotels" msgType="info" />
      )}
    </div>
  );
};
