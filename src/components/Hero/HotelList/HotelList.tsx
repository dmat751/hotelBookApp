import HotelItem from './HotelItem/HotelItem';
import classes from './HotelList.module.scss';
import baseClasses from './../../../baseClasses.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchHotelListData } from '../../../store/hotelListAction';
import { selectHotelList } from '../../../store/index';
import { Hotel } from '../../../models/Hotel';

let isInitial = true;

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
  const hotelFilters = hotelListItem.filters;
  let filteredHotelList = hotelListItem.hotelList;
  if (!isInitial && !hotelListItem.apiQueryStatus.isError) {
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

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
  }, []);

  return (
    <div className={classes['list-container']}>
      <ul className={`${classes.list} ${baseClasses['basic-container1']}`}>
        {!isInitial &&
          filteredHotelList.map((hotelItem) => {
            return (
              <li className={classes['list-item']} key={hotelItem.id}>
                {!hotelListItem.apiQueryStatus.isError && (
                  <HotelItem hotelItem={hotelItem} />
                )}
              </li>
            );
          })}
        {hotelListItem.apiQueryStatus.notification && (
          <li>{hotelListItem.apiQueryStatus.notification}</li>
        )}
      </ul>
    </div>
  );
};
export default HotelList;
