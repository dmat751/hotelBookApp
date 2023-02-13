import type { Room } from '../../../../modules/hotelList/types/room';

type Props = Readonly<{ dataTestId: string; room: Room }>;

export const HotelItemRoom = ({ dataTestId, room }: Props) => {
  const { name, occupancy, longDescription } = room;
  return (
    <div
      data-testid={dataTestId}
      className="flex font-varela bg-[#F5F5F6] mt-[20px] mr-[-20px] ml-[-20px] p-[20px]"
    >
      <div className="w-full md:max-w-[150px] max-w-[100px] shrink-0 mr-[30px]">
        <h5 className="mb-[7px] text-lg leading-5">{name}</h5>
        <h6 className="mb-[1px] text-base leading-4 mt-[20px]">
          Adults: {occupancy.maxAdults}
        </h6>
        <h6>Children: {occupancy.maxChildren}</h6>
      </div>
      <div>
        <p>{longDescription}</p>
      </div>
    </div>
  );
};
