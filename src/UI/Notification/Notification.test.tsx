import { Notification } from './Notification';
import { render, screen } from '@testing-library/react';
describe('test notification component', () => {
  test('error type notification.', () => {
    render(<Notification message="testmsg" msgType="error" />);
    const notiItem = screen.getByText('testmsg');
    expect(notiItem).toHaveClass('text-red-600');
  });

  test('info type notification.', () => {
    render(<Notification message="testmsg" msgType="info" />);
    const notiItem = screen.getByText('testmsg');
    expect(notiItem).toHaveClass('text-black');
  });
});
