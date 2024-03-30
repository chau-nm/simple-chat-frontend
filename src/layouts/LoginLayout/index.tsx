import React, { type FC } from 'react';
import styles from './loginLayout.module.scss';

interface LoginLayoutProps {
  children?: React.ReactNode;
}

const LoginLayout: FC<LoginLayoutProps> = ({ children }) => {
  return <div className={styles.loginPage}>{children}</div>;
};

export default LoginLayout;
