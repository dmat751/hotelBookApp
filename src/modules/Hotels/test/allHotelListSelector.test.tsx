import { resetRootState } from '../../../app/store/resetRootState';
import { RootState } from '../../../app/store/store';
import { fetchedHotelsWithRoomsData } from '../../../mocks/hotelsWithRoomsData/hotelsWithRoomsData';
import { selectHotels } from '../selectors';

let rootState: RootState;

beforeEach(() => {
  rootState = resetRootState(rootState);
});

describe('test hotelsSelector', () => {
  it('should return fetched Hotels', () => {
    //given
    //when
    const hotels = selectHotels(rootState);

    //then
    expect(hotels).toEqual(fetchedHotelsWithRoomsData);
  });
});
