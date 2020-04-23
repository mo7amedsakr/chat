import { useState, useContext, useCallback } from 'react';
import AuthContext from '../context/Auth/AuthContext';
import { loggedIn } from '../socket';
import axios from '../axios';
import { useHistory } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';

export const useAuth = () => {
  const [error, setError] = useState(false);
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const push = useCallback(history.push, []);

  const setter = useCallback(
    (res, to = '/') => {
      setUser(res.data.data);
      loggedIn(res.data.data);
      setIsLoading(false);
      push(to);
    },
    [setUser, push]
  );

  const sendAuthReq = async (url, data) => {
    if (!isEmail(data.email) || !isLength(data.password, { min: 8 })) {
      return setError({ message: 'Try again with a valid values.' });
    }

    if (data.passwordConfirm && data.passwordConfirm !== data.password) {
      return setError({ message: 'Passwords does not match.' });
    }
    setIsLoading(true);
    try {
      const res = await axios.post(`/users${url}`, data);
      console.log(res.data.data);
      setter(res);
    } catch (error) {
      setError(error.response.data);
      setIsLoading(false);
    }
  };

  const getMe = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('/users/me');
      setter(res);
    } catch (error) {
      setError(true);
      setIsLoading(false);
      push('/login');
    }
  }, [push, setter]);

  return { sendAuthReq, isLoading, error, getMe };
};
