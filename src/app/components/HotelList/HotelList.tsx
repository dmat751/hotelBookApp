import { HotelItem } from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from '../../assets/baseClasses.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../modules/hotelList/hotelListAction';
import { spinner } from '../../../UI/Spinner/Spinner';
import { selectApiQueryStatus } from '../../../modules/apiStatus/ApiStatusSelector';
import { selectHotelList } from '../../../modules/hotelList/hotelListSelector';
import { selectIsFiltersLoading } from '../../../modules/hotelFilters/hotelFiltersSelectors';

export const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListItem = useSelector(selectHotelList);
  const {
    isError: isApiError,
    isLoading: isApiLoading,
    notification: apiNotification,
  } = useSelector(selectApiQueryStatus);
  const isFiltersLoading = useSelector(selectIsFiltersLoading);

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  let content: JSX.Element[] | JSX.Element;

  if (hotelListItem.length > 0) {
    content = hotelListItem.map((hotelItem) => {
      return (
        <li className={classes['list-item']} key={hotelItem.id}>
          {!isApiError && <HotelItem hotelItem={hotelItem} />}
        </li>
      );
    });
  } else {
    content = (
      <p
        className={`${isApiLoading && classes['hide-item']} ${
          classes['not-found']
        }`}
      >
        We can not find any hotels
      </p>
    );
  }

  return (
    <div className={classes['list-container']}>
      <ul className={`${classes.list} ${baseClasses['basic-container1']}`}>
        {!isFiltersLoading && content}
        {isFiltersLoading && spinner}
        {isApiError && (
          <li className={classes['error-info']}>{apiNotification}</li>
        )}
        {isApiLoading && <li>{spinner}</li>}
      </ul>
    </div>
  );
};
