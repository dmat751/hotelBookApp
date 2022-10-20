import { Notification } from '../Notification';
import { render, screen } from '@testing-library/react';

describe('test notification component', () => {
  type NotificationProps = {
    message: string;
    messageType: 'error' | 'info';
    expectedClass: string;
  };

  const cases: NotificationProps[] = [
    {
      message: 'test msg error',
      messageType: 'error',
      expectedClass: 'text-red-600',
    },
    {
      message: 'test msg info',
      messageType: 'info',
      expectedClass: 'text-black',
    },
  ].map((notiItem) =>
    Object.assign(notiItem, {
      toString: () => `
        message: ${notiItem.message}
        messageType: ${notiItem.messageType}
        expectedClass: ${notiItem.expectedClass}`,
    } as NotificationProps)
  );

  test.each<NotificationProps>(cases)(
    'test for: %s',
    ({ expectedClass, message, messageType }) => {
      //given
      render(<Notification message={message} msgType={messageType} />);

      //when
      const notiItem = screen.getByText(message);

      //then
      expect(notiItem).toHaveClass(expectedClass);
    }
  );
});
