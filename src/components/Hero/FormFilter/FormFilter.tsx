import { useRef } from 'react';

const parseInputToNumber = (stringAmount: string | undefined) => {
  if (stringAmount !== undefined) {
    try {
      const numberAmount = parseInt(stringAmount);
      return numberAmount;
    } catch (error) {
      return null;
    }
  }
};

const FormFilter: React.FC<{ someData: string }> = (props) => {
  const starInputRef = useRef<HTMLInputElement>(null);

  const searchHandler = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredStarAmount = starInputRef.current?.value;
    const numberStarAmount = parseInputToNumber(enteredStarAmount);
    console.log(numberStarAmount);
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
