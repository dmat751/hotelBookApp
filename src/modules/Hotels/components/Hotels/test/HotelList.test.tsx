import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../../../app/store/store';
import { Hotels } from '../Hotels';

describe('Hotels test', () => {
  test('get data form API and render hotels.', async () => {
    render(
      <Provider store={store}>
        <Hotels />
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
