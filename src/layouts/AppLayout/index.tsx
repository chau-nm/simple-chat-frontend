import React, { type FC } from 'react';
import styles from './appLayout.module.scss';

interface AppLayoutProps {
  children?: React.ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <div className={styles.appLayout}>{children}</div>;
};

export default AppLayout;
