import classNames from 'classnames';

type Props = Readonly<{
  address1: string;
  address2: string;
  name: string;
}>;

export const HotelInfo = ({ address1, address2, name }: Props) => {
  const hotelInfoContainerClassNames = classNames(
    'md:mr-auto md:py-0 md:px-[30px] md:block order-0 flex flex-col items-center mb-[20px]'
  );

  return (
    <div className={hotelInfoContainerClassNames}>
      <h2 className="md:text-5xl text-3xl mb-2">{name}</h2>
      <h3 className="md:text-4xl text-2xl mb-2">{address1}</h3>
      {address2 && <h4 className="md:text-xl">{address2}</h4>}
    </div>
  );
};
