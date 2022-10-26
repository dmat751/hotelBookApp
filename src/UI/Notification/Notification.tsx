import classNames from 'classnames';

type Props = Readonly<{ message: string; msgType: 'error' | 'info' }>;
export const Notification = ({ message, msgType }: Props) => {
  const classes = classNames(
    'font-varela text-xl mx-auto text-center',
    {
      'text-black': msgType === 'info',
    },
    {
      'text-red-600': msgType === 'error',
    }
  );

  return <p className={classes}>{message}</p>;
};
