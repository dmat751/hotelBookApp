import { resetRootState } from '../../../../app/queries/test/resetRootState';
import { RootState } from '../../../../app/types/rootState';
import { fetchedHotelsWithRoomsData } from '../../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { selectAllHotelList } from '../allHotelListSelector';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test allHotelListSelector', () => {
  it('should return fetched hotelList', () => {
    //given
    //when
    const hotelList = selectAllHotelList(rootState);

    //then
    expect(hotelList).toEqual(fetchedHotelsWithRoomsData);
  });
});
