import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import hotelListSlice, { HotelsFilters } from '../../../store/hotelListSlice';

const parseInputToNumber = (stringAmount: string | undefined) => {
  if (stringAmount !== undefined) {
    try {
      const numberAmount = parseInt(stringAmount);
      return numberAmount;
    } catch (error) {
      return 0;
    }
  } else {
    return 0;
  }
};

const FormFilter: React.FC<{ someData: string }> = (props) => {
  const starInputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

  const searchHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredStarAmount = starInputRef.current?.value;
    const numberStarAmount = parseInputToNumber(enteredStarAmount);
    console.log(numberStarAmount);
    const hotelFilters: HotelsFilters = {
      adults: 2,
      children: 0,
      stars: numberStarAmount,
    };
    dispatch(hotelListSlice.actions.setHotelFilters(hotelFilters));
  };

  return (
    <div>
      <form onSubmit={searchHandler}>
        <label htmlFor="starAmount">star Amount:</label>
        <input ref={starInputRef} id="starAmount" type="number" />
        <button type="submit">search</button>
      </form>
    </div>
  );
};
export default FormFilter;
