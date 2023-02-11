import { Room } from '../../../../modules/hotelList/types/room';

type Props = Readonly<{ room: Room }>;
export const HotelItemRoom = ({ room }: Props) => (
  <div className="flex font-varela bg-[#F5F5F6] mt-[20px] mr-[-20px] ml-[-20px] p-[20px]">
    <div className="w-full md:max-w-[150px] max-w-[100px] shrink-0 mr-[30px]">
      <h5 className="mb-[7px] text-lg leading-5">{room.name}</h5>
      <h6 className="mb-[1px] text-base leading-4 mt-[20px]">
        Adults: {room.occupancy.maxAdults}
      </h6>
      <h6>Children: {room.occupancy.maxChildren}</h6>
    </div>
    <div>
      <p>{room.longDescription}</p>
    </div>
  </div>
);
