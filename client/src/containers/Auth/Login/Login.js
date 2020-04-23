import React, { useRef } from 'react';
import classes from '../Auth.module.scss';
import { Input } from '../../../components/Input/Input';
import { useAuth } from '../../../hooks/useAuth';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';

export const Login = () => {
  const { sendAuthReq, error, isLoading } = useAuth();
  const email = useRef(null);
  const password = useRef(null);

  const submitHanlder = () =>
    sendAuthReq('/login', {
      email: email.current.value,
      password: password.current.value,
    });

  return (
    <form
      className={classes.Auth}
      onSubmit={(e) => {
        e.preventDefault();
        return submitHanlder();
      }}
    >
      <h2>Log in</h2>
      {error ? <p className={classes.AuthError}>{error.message}</p> : null}
      <Input type="email" placeholder="Your E-mail" ref={email} />
      <Input type="password" placeholder="Your Password" ref={password} />
      <Button>{isLoading ? 'Loading...' : 'Submit'}</Button>
      <Link to="/signup">Create new account</Link>
    </form>
  );
};
