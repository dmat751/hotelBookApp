import produce from 'immer';
import { resetRootState } from '../../../app/store/resetRootState';
import { RootState } from '../../../app/store/store';
import { hotelFiltersSliceInitialState } from '../../HotelFilters/Slice';
import { selectFilteredHotels } from '../Selectors';
import { Hotel } from '../types/Hotel';
import { Room } from '../types/Room';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test selectFilteredHotelList', () => {
  //given
  const isMaxAdultsOccupancyValid = (room: Room, adultsValue: number) =>
    room.occupancy.maxAdults >= adultsValue;

  const isMaxChildrenOccupancyValid = (room: Room, childrenValue: number) =>
    room.occupancy.maxChildren >= childrenValue;

  const isHotelStarsRatingValid = (hotel: Hotel, starsValue: number) =>
    hotel.starRating >= starsValue;

  const checkIsHotelRoomCorrectFiltered = (
    adultsValue: number,
    childrenValue: number,
    starsValue: number,
    filteredHotels: Hotel[]
  ) =>
    filteredHotels.every((hotel) => {
      const isHotelFiltersValid = isHotelStarsRatingValid(hotel, starsValue);
      const isRoomFilterValid = hotel.roomsDetails.rooms.every((room) => {
        const isRoomsFiltersValid =
          isMaxAdultsOccupancyValid(room, adultsValue) &&
          isMaxChildrenOccupancyValid(room, childrenValue);

        return isRoomsFiltersValid;
      });
      const isAllFiltersValid = isHotelFiltersValid && isRoomFilterValid;
      return isAllFiltersValid;
    });

  type TestCase = {
    adults: number;
    children: number;
    stars: number;
    expectedHotelLength: number;
  };
  const cases: TestCase[] = [
    {
      adults: hotelFiltersSliceInitialState.adults,
      children: hotelFiltersSliceInitialState.children,
      stars: hotelFiltersSliceInitialState.stars,
      expectedHotelLength: 4,
    },
    {
      adults: hotelFiltersSliceInitialState.adults,
      children: hotelFiltersSliceInitialState.children,
      stars: 5,
      expectedHotelLength: 2,
    },
    {
      adults: 4,
      children: 4,
      stars: 4,
      expectedHotelLength: 1,
    },
    {
      adults: 2,
      children: 3,
      stars: 3,
      expectedHotelLength: 1,
    },
    {
      adults: 3,
      children: 0,
      stars: 5,
      expectedHotelLength: 0,
    },
  ];

  test.each<TestCase>(cases)(
    'test for: %s',
    ({ adults, children, stars, expectedHotelLength }) => {
      //when
      rootState = {
        hotelList: rootState.hotelList,
        hotelFilters: produce(rootState.hotelFilters, (draft) => {
          draft.adults = adults;
          draft.children = children;
          draft.stars = stars;
        }),
      };
      const filteredHotels = selectFilteredHotels(rootState);

      //then
      expect(filteredHotels.length).toBe(expectedHotelLength);
      expect(
        checkIsHotelRoomCorrectFiltered(
          rootState.hotelFilters.adults,
          rootState.hotelFilters.children,
          rootState.hotelFilters.stars,
          filteredHotels
        )
      ).toBe(true);
    }
  );
});
