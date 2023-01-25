import { useDispatch, useSelector } from 'react-redux';
import { selectStarsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSelectors';
import { setStarsFilter } from '../../../../../modules/hotelFilters/hotelFiltersSlice';
import { Stars } from '../../../Stars/Stars';
import { selectMaxHotelStars } from '../../../../../modules/hotelList/selectors/maxFilterValueSelectors';

type Props = Readonly<{
  dataTestId: string;
}>;
export const StarFilter = ({ dataTestId: DataTestId }: Props) => {
  const currentStarsAmount = useSelector(selectStarsFilter);
  const maxStarsAmount = useSelector(selectMaxHotelStars);
  const dispatch = useDispatch();

  const onClickHandlerStar = (starIndex: number): void => {
    dispatch(setStarsFilter(starIndex + 1));
  };

  return (
    <div className="flex" data-testid={DataTestId}>
      <Stars
        borderColor="#fff500"
        fillColor="#fff500"
        numberOfSelectedStarts={currentStarsAmount}
        numberOfStars={maxStarsAmount}
        onFilterChange={onClickHandlerStar}
      />
    </div>
  );
};
