import React, { useState, useEffect } from 'react';
import classes from '../Auth.module.scss';
import { Input } from '../../../components/Input/Input';
import { Button } from '../../../components/Button/Button';
import { Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { useForm } from 'react-hook-form';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { sendAuthReq, isLoading, error } = useAuth();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  const submitHandler = () => sendAuthReq('/login', { email, password });

  return (
    <Container maxWidth="sm">
      <form className={classes.Auth} onSubmit={handleSubmit(submitHandler)}>
        <p>Log in</p>
        {error ? <p style={{ color: '#cc0000' }}>{error.message}</p> : null}
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
        <Button type="submit" disable={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </Button>
        <Link to="/signup">Create a new account</Link>
      </form>
    </Container>
  );
};
