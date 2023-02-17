import { resetRootState } from '../../../app/store/resetRootState';
import { RootState } from '../../../app/store/store';
import { fetchedHotelsWithRoomsData } from '../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { selectHotels } from '../Selectors';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test allHotelListSelector', () => {
  it('should return fetched Hotels', () => {
    //given
    //when
    const hotelList = selectHotels(rootState);

    //then
    expect(hotelList).toEqual(fetchedHotelsWithRoomsData);
  });
});
