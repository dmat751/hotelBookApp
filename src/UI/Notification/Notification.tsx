import classes from './Notification.module.scss';

type Props = Readonly<{ message: string; msgType: 'error' | 'info' }>;
export const Notification = ({ message, msgType }: Props) => {
  const notiClasses = `${classes.notification} ${
    classes['notification--' + msgType]
  }`;
  return <p className={notiClasses}>{message}</p>;
};
