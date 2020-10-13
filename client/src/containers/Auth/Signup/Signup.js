import React, { useRef, useContext } from 'react';
import classes from '../Auth.module.scss';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/Auth';
import { ErrorContext } from '../../../context/Error';

export const Signup = () => {
  const { sendAuthReq, authLoading: isLoading } = useContext(AuthContext);
  const { error } = useContext(ErrorContext);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const passwordConfirm = useRef(null);

  const submitHanlder = () =>
    sendAuthReq('/signup', {
      username: username.current.value,
      email: email.current.value,
      password: password.current.value,
      passwordConfirm: passwordConfirm.current.value,
    });

  return (
    <form
      className={classes.Auth}
      onSubmit={(e) => {
        e.preventDefault();
        return submitHanlder();
      }}
    >
      <h2>Sign up</h2>

      {error ? <p>{error.message}</p> : null}
      <Input type="text" placeholder="Your Username" ref={username} />
      <Input type="email" placeholder="Your E-mail" ref={email} />
      <Input type="password" placeholder="Your Password" ref={password} />
      <Input
        type="password"
        placeholder="Confirm Your Password"
        ref={passwordConfirm}
      />
      <Button>{isLoading ? 'Loading...' : 'Submit'}</Button>
      <Link to="/login">Login to your account</Link>
    </form>
  );
};
