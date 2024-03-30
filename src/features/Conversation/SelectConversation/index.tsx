import { type FC } from 'react';
import styles from './selectConversation.module.scss';

const SelectConversation: FC = () => {
  return (
    <div className={styles.selectConversation}>
      <select>
        <option>none</option>
        <option>user 1</option>
        <option>user 1</option>
      </select>
    </div>
  );
};

export default SelectConversation;
