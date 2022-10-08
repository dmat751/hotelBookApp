import { HotelList } from './HotelList';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

describe('HotelList test', () => {
  test('get data form API and render hotel list.', async () => {
    render(
      <Provider store={store}>
        <HotelList />
      </Provider>
    );
    const hotelText = screen.findByText('OBM Hotel 1');
    expect(await hotelText).toBeInTheDocument();
  });
});
