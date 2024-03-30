import { SendMessage } from 'components/Icons';
import { type FC } from 'react';
import styles from './input.module.scss';

const Input: FC = () => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.input}>
        <input placeholder="Enter the message" />
      </div>
      <div className={styles.sendButton}>
        <SendMessage width={20} height={20} />
      </div>
    </div>
  );
};

export default Input;
