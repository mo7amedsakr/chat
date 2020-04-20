import React, { useState } from 'react';
import classes from '../Auth.module.scss';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

export const Signup = () => {
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const { sendAuthReq, isLoading, error } = useAuth();
  const { register, handleSubmit } = useForm();

  const submitHandler = () =>
    sendAuthReq('/signup', { username, email, password, passwordConfirm });

  return (
    <Container maxWidth="sm">
      <form className={classes.Auth} onSubmit={handleSubmit(submitHandler)}>
        <p>Sign up</p>
        {error ? <p style={{ color: '#cc0000' }}>{error.message}</p> : null}
        <Input
          type="text"
          placeholder="Your Username"
          onChange={(e) => setUserName(e.target.value)}
          reference={register({ required: true })}
        />
        <Input
          type="email"
          placeholder="Your E-mail"
          onChange={(e) => setEmail(e.target.value)}
          name="Your E-mail"
          reference={register({
            required: true,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/i,
          })}
        />
        <Input
          type="password"
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
          name="Your Password"
          reference={register({ required: true, min: 8 })}
        />
        <Input
          type="password"
          placeholder="Confrim Your Password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          name="Confrim Your Password"
          reference={register({ required: true, min: 8 })}
        />
        <Button type="submit" disable={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
        <Link to="/login">Login to your account</Link>
        <p style={{ fontSize: '1.3rem' }}>
          Create a dummy account with a valid values DON'T user your real data
        </p>
      </form>
    </Container>
  );
};
