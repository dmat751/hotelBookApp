import { Notification } from '../Notification';
import { render, screen } from '@testing-library/react';

describe('test notification component', () => {
  test('error type notification.', () => {
    //given
    render(<Notification message="testmsg" msgType="error" />);

    //when
    const notiItem = screen.getByText('testmsg');

    //then
    expect(notiItem).toHaveClass('text-red-600');
  });

  test('info type notification.', () => {
    //given
    render(<Notification message="testmsg" msgType="info" />);

    //when
    const notiItem = screen.getByText('testmsg');

    //then
    expect(notiItem).toHaveClass('text-black');
  });
});
