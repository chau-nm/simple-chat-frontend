import { type FC } from 'react';
import Content from './Content';
import Input from './Input';
import SelectConversation from './SelectConversation';
import styles from './conversation.module.scss';

export const messages = [
  {
    id: 1,
    user: {
      id: 1,
      name: 'A',
    },
    message: 'Hello',
  },
  {
    id: 2,
    user: {
      id: 2,
      name: 'B',
    },
    message: 'Hi',
  },
];

const Conversation: FC = () => {
  return (
    <div className={styles.conversationWrapper}>
      <SelectConversation />
      <hr style={{ margin: '10px 0' }} />
      <Content />
      <hr style={{ margin: '10px 0' }} />
      <Input />
    </div>
  );
};

export default Conversation;
