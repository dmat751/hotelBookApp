import { resetRootState } from '@/app/store/resetRootState';
import { RootState } from '@/app/store/store';
import {
  selectDataStatus,
  selectErrorType,
  selectIsDataError,
} from '@/modules/Hotels/selectors';
import produce from 'immer';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test selectDataStatus', () => {
  it('should return correct value (pending)', () => {
    //given
    //when
    const selectedValue = selectDataStatus(rootState);

    //then
    expect(selectedValue).toBe('pending');
  });

  it('should return correct value (resolved)', () => {
    //given
    //when
    rootState = {
      hotels: produce(rootState.hotels, (draft) => {
        draft.status = 'resolved';
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectDataStatus(rootState);

    //then
    expect(selectedValue).toBe('resolved');
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
      hotels: produce(rootState.hotels, (draft) => {
        draft.errorMessage = testErrorMsg;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectErrorType(rootState);

    //then
    expect(selectedValue).toBe(testErrorMsg);
  });
});

describe('test selectIsDataError', () => {
  it('should return correct value (false)', () => {
    //given
    //when
    const selectedValue = selectIsDataError(rootState);

    //then
    expect(selectedValue).toBe(false);
  });

  it('should return correct value (true)', () => {
    //given
    //when
    rootState = {
      hotels: produce(rootState.hotels, (draft) => {
        draft.isError = true;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectIsDataError(rootState);

    //then
    expect(selectedValue).toBe(true);
  });
});
