import { type FC } from 'react';
import { messages } from '..';
import Message from './Message';
import styles from './content.module.scss';

const Content: FC = () => {
  return (
    <div className={styles.content}>
      {messages.map((message) => {
        return (
          <Message
            key={message.id}
            isSelf={message.user.id === 1}
            message={message.message}
          />
        );
      })}
    </div>
  );
};

export default Content;
