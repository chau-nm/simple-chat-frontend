import { type FC } from 'react';
import styles from './message.module.scss';

interface MessageProps {
  isSelf: boolean;
  message: string;
}

const Message: FC<MessageProps> = ({ isSelf, message }) => {
  return (
    <div className={`${styles.messageWrapper} ${isSelf && styles.self}`}>
      <div className={styles.message}>{message}</div>
    </div>
  );
};

export default Message;
