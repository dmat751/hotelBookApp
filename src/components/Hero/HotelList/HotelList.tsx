import { useEffect, useState } from 'react';
import { Hotel } from '../../../models/Hotel';
import { RoomsDetails } from '../../../models/Room';

const HotelList: React.FC<{ dummyVar: string }> = (props) => {
  const [hotelsData, sethotelsData] = useState<Hotel[]>([]);

  useEffect(() => {}, []);

  return <div>example</div>;
};
export default HotelList;
