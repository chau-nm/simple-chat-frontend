import React, { useState, type FC } from 'react';
import styles from './login.module.scss';
import { type FormLogin } from './types';

const Login: FC = () => {
  const [formItemValues, setFormItemValues] = useState<FormLogin>({
    username: '',
    password: '',
  });

  const handleChangeUsername = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormItemValues((values) => {
      return {
        ...values,
        username: event.target.value,
      };
    });
  };

  const handleChangPassword = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setFormItemValues((values) => {
      return {
        ...values,
        password: event.target.value,
      };
    });
  };

  const handleSubmit = (): void => {};

  return (
    <div className={styles.loginFormWrapper}>
      <div className={styles.loginFormTitle}>
        <h3>Login</h3>
      </div>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.formItem}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter the username"
            value={formItemValues.username}
            onChange={handleChangeUsername}
          />
        </div>
        <div className={styles.formItem}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter the password"
            value={formItemValues.password}
            onChange={handleChangPassword}
          />
        </div>
        <div className={styles.formItem}>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
