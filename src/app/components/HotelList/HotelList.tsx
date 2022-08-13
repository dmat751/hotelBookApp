import HotelItem from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from '../../assets/baseClasses.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {fetchHotelListData} from '../../../modules/HotelList/hotelListAction';
import {selectHotelFilters} from '../../store';
import {Hotel} from '../../types/hotel';
import {spinner} from '../../../helpers/Spinner/Spinner';
import {selectApiQueryStatus} from "../../../modules/ApiStatus/ApiStatusSelector";
import {selectHotelList} from "../../../modules/HotelList/hotelListSelector";

const amountFilter = (
  hotelList: Hotel[],
  amount: number,
  filterType: string
) => {
  const result = hotelList.map((hotelItem) => {
    let filteredRoom = hotelItem.roomsDetails.rooms.filter((room) => {
      if (filterType === 'children') {
        return room.occupancy.maxChildren >= amount;
      } else if (filterType === 'adults') {
        return room.occupancy.maxAdults >= amount;
      } else {
        return true;
      }
    });

    const filteredHotel = {
      ...hotelItem,
      roomsDetails: {
        ratePlans: hotelItem.roomsDetails.ratePlans,
        rooms: filteredRoom,
      },
    };

    return filteredHotel;
  });
  return result;
};

const starFilter = (hotelList: Hotel[], starAmount: number): Hotel[] => hotelList.filter((hotelItem) => hotelItem.starRating >= starAmount);

const removeHotelsWithoutRooms = (hotelList: Hotel[]): Hotel[] => hotelList.filter((hotelItem) => hotelItem.roomsDetails.rooms.length !== 0);

const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListItem = useSelector(selectHotelList);
  const hotelFilters = useSelector(selectHotelFilters);
  const apiQueryStatus = useSelector(selectApiQueryStatus);
  let filteredHotelList = hotelListItem.hotelList;
  if (!apiQueryStatus.isError) {
    try {
      filteredHotelList = amountFilter(
        filteredHotelList,
        hotelFilters.children,
        'children'
      );

      filteredHotelList = amountFilter(
        filteredHotelList,
        hotelFilters.adults,
        'adults'
      );

      filteredHotelList = starFilter(filteredHotelList, hotelFilters.stars);

      filteredHotelList = removeHotelsWithoutRooms(filteredHotelList);
    } catch (error) {
      console.log('filter Error');
    }
  }

  useEffect(() => {
    dispatch(fetchHotelListData());
  }, [dispatch]);

  let content: JSX.Element[] | JSX.Element;

  if (filteredHotelList.length > 0) {
    content = filteredHotelList.map((hotelItem) => {
      return (
        <li className={classes['list-item']} key={hotelItem.id}>
          {!apiQueryStatus.isError && <HotelItem hotelItem={hotelItem} />}
        </li>
      );
    });
  } else {
    content = (
      <p
        className={`${apiQueryStatus.isLoading && classes['hide-item']} ${
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
        {!hotelFilters.filterLoading && content}
        {hotelFilters.filterLoading && spinner}
        {apiQueryStatus.isError && (
          <li className={classes['error-info']}>
            {apiQueryStatus.notification}
          </li>
        )}
        {apiQueryStatus.isLoading && <li>{spinner}</li>}
      </ul>
    </div>
  );
};
export default HotelList;
