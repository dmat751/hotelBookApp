import { Notification } from '@/components/Notification/Notification';
import { render, screen } from '@testing-library/react';

describe('test notification component', () => {
  //given
  type TestCase = {
    message: string;
    messageType: 'error' | 'info';
    expectedClass: string;
  };

  const cases: TestCase[] = [
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
  ].map(
    (notification) =>
      ({
        ...notification,
        toString: () => `
        message: ${notification.message}
        messageType: ${notification.messageType}
        expectedClass: ${notification.expectedClass}`,
      } as TestCase)
  );

  test.each<TestCase>(cases)(
    'test for: %s',
    ({ expectedClass, message, messageType }) => {
      render(<Notification message={message} msgType={messageType} />);

      //when
      const notiItem = screen.getByText(message);

      //then
      expect(notiItem).toHaveClass(expectedClass);
    }
  );
});
