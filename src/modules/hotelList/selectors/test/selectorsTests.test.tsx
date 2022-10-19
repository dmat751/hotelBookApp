import { selectAllHotelList } from '../allHotelListSelector';
import { selectErrorType, selectIsDataLoading } from '../dataStatusSelectors';
import { Hotel } from '../../../../app/types/hotel';
import { RootState } from '../../../../app/types/rootState';
import { initialState } from '../../../hotelFilters/hotelFiltersSlice';
import validHotelRoomData from '../../../../mocks/hotelWithRoomsData/hotelWithRoomsData.json';
import produce from 'immer';

const castedHotelData: Hotel[] = JSON.parse(JSON.stringify(validHotelRoomData));
let rootState: RootState;

beforeEach(() => {
  rootState = {
    hotelFilters: initialState,
    hotelList: {
      hotelList: castedHotelData,
      errorMessage: '',
      isError: false,
      isLoading: false,
    },
  };
});

describe('test allHotelListSelector', () => {
  it('should return fetched hotelList', () => {
    //given
    //when
    const hotelList = selectAllHotelList(rootState);

    //then
    expect(hotelList).toEqual(castedHotelData);
  });
});

describe('test selectIsDataLoading', () => {
  it('should return correct value (false)', () => {
    //given
    //when
    const selectedValue = selectIsDataLoading(rootState);

    //then
    expect(selectedValue).toBe(false);
  });

  it('should return correct value (true)', () => {
    //given
    //when
    rootState = {
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.isLoading = true;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectIsDataLoading(rootState);

    //then
    expect(selectedValue).toBe(true);
  });
});

describe('test selectErrorType', () => {
  it('should return correct value ("")', () => {
    //given
    //when
    const selectedValue = selectErrorType(rootState);

    //then
    expect(selectedValue).toBe('');
  });

  it('should return correct value (const testErrorMsg)', () => {
    //given
    //when
    const testErrorMsg = 'test error msg';
    rootState = {
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.errorMessage = testErrorMsg;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectErrorType(rootState);

    //then
    expect(selectedValue).toBe(testErrorMsg);
  });
});
