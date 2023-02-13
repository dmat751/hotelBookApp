import classNames from 'classnames';

type Props = Readonly<{
  hotelAddress1: string;
  hotelAddress2: string;
  hotelName: string;
}>;

export const HotelInfo = ({
  hotelAddress1,
  hotelAddress2,
  hotelName,
}: Props) => {
  const hotelInfoContainerClassNames = classNames(
    'md:mr-auto md:py-0 md:px-[30px] md:block order-0 flex flex-col items-center mb-[20px]'
  );

  return (
    <div className={hotelInfoContainerClassNames}>
      <h2 className="md:text-5xl text-3xl mb-2">{hotelName}</h2>
      <h3 className="md:text-4xl text-2xl mb-2">{hotelAddress1}</h3>
      {hotelAddress2 && <h4 className="md:text-xl">{hotelAddress2}</h4>}
    </div>
  );
};
