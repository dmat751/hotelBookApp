import { HotelList } from '../HotelList';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';

describe('HotelList test', () => {
  test('get data form API and render hotel list.', async () => {
    render(
      <Provider store={store}>
        <HotelList />
      </Provider>
    );

    //test is hotel visible
    const hotelItem = screen.findByText('OBM Hotel 1');
    expect(await hotelItem).toBeInTheDocument();

    //test is hotel room visible
    const roomItem = await screen.findByText('Deluxe Twin');
    expect(roomItem).toBeInTheDocument();
  });
});
