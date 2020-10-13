import React, { useRef, useContext } from 'react';
import classes from '../Auth.module.scss';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth';
import { ErrorContext } from '../../../context/Error';

export const Login = () => {
  const { sendAuthReq, authLoading: isLoading } = useContext(AuthContext);
  const { error } = useContext(ErrorContext);
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
      <Input
        type="email"
        placeholder="Your E-mail"
        ref={email}
        defaultValue="test@user.com"
      />
      <Input
        type="password"
        placeholder="Your Password"
        ref={password}
        defaultValue="testuser1234"
      />
      <Button>{isLoading ? 'Loading...' : 'Submit'}</Button>
      <Link to="/signup">Create new account</Link>
    </form>
  );
};
