import { store } from '@store/store';
import { Hotels } from '@/modules/Hotels/components/Hotels/Hotels';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

describe('Hotels test', () => {
  test('get data form API and render hotels.', async () => {
    //given
    render(
      <Provider store={store}>
        <Hotels />
      </Provider>
    );

    //when
    //then
    const hotelItem = screen.findByText('OBM Hotel 1');
    expect(await hotelItem).toBeInTheDocument();

    const roomItem = await screen.findByText('Deluxe Twin');
    expect(roomItem).toBeInTheDocument();
  });
});
