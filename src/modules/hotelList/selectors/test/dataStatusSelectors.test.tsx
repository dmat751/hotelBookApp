import { resetRootState } from '../../../../app/queries/test/resetRootState';
import { RootState } from '../../../../app/types/rootState';
import produce from 'immer';
import {
  selectErrorType,
  selectIsDataError,
  selectIsDataStatus,
} from '../dataStatusSelectors';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test selectIsDataLoading', () => {
  it('should return correct value (pending)', () => {
    //given
    //when
    const selectedValue = selectIsDataStatus(rootState);

    //then
    expect(selectedValue).toBe('pending');
  });

  it('should return correct value (resolved)', () => {
    //given
    //when
    rootState = {
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.status = 'resolved';
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectIsDataStatus(rootState);

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
      hotelList: produce(rootState.hotelList, (draft) => {
        draft.isError = true;
      }),
      hotelFilters: rootState.hotelFilters,
    };
    const selectedValue = selectIsDataError(rootState);

    //then
    expect(selectedValue).toBe(true);
  });
});