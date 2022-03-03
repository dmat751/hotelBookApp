import HotelItem from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from './../../baseClasses.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../store/hotelListAction';
import {
  selectApiQueryStatus,
  selectHotelFilters,
  selectHotelList,
} from '../../store/index';
import { Hotel } from '../../models/Hotel';

const spinner = (
  <div className={classes['multi-spinner-container']}>
    <div className={classes['multi-spinner']}>
      <div className={classes['multi-spinner']}>
        <div className={classes['multi-spinner']}>
          <div className={classes['multi-spinner']}>
            <div className={classes['multi-spinner']}>
              <div className={classes['multi-spinner']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const childrenFilter = (
  hotelList: Hotel[],
  childrenAmount: number
): Hotel[] => {
  const result = hotelList.map((hotelItem) => {
    let filteredRoom = hotelItem.roomsDetails.rooms.filter((room) => {
      if (room.occupancy.maxChildren >= childrenAmount) {
        return true;
      } else {
        return false;
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

const adultFilter = (hotelList: Hotel[], adultAmount: number): Hotel[] => {
  const result = hotelList.map((hotelItem) => {
    let filteredRoom = hotelItem.roomsDetails.rooms.filter((room) => {
      if (room.occupancy.maxAdults >= adultAmount) {
        return true;
      } else {
        return false;
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

const starFilter = (hotelList: Hotel[], starAmount: number): Hotel[] => {
  const result = hotelList.filter((hotelItem) => {
    if (hotelItem.starRating >= starAmount) {
      return true;
    } else {
      return false;
    }
  });

  return result;
};

const removeHotelsWithoutRooms = (hotelList: Hotel[]): Hotel[] => {
  const result = hotelList.filter((hotelItem) => {
    if (hotelItem.roomsDetails.rooms.length === 0) {
      return false;
    } else {
      return true;
    }
  });

  return result;
};

const HotelList = () => {
  const dispatch = useDispatch();
  const hotelListItem = useSelector(selectHotelList);
  const hotelFilters = useSelector(selectHotelFilters);
  const apiQueryStatus = useSelector(selectApiQueryStatus);
  let filteredHotelList = hotelListItem.hotelList;
  if (!apiQueryStatus.isError) {
    try {
      filteredHotelList = childrenFilter(
        filteredHotelList,
        hotelFilters.children
      );

      filteredHotelList = adultFilter(filteredHotelList, hotelFilters.adults);

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
        {apiQueryStatus.isError && <li>{apiQueryStatus.notification}</li>}
        {apiQueryStatus.isLoading && <li>{spinner}</li>}
      </ul>
    </div>
  );
};
export default HotelList;
