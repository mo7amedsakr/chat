import { useState, useContext, useCallback } from 'react';
import AuthContext from '../context/Auth/AuthContext';
import { loggedIn } from '../socket';
import axios from '../axios';
import { useHistory } from 'react-router-dom';

export const useAuth = () => {
  const [error, setError] = useState(null);
  const { setUser } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const { push } = useHistory();

  const setter = useCallback(
    (res, to = '/') => {
      setUser(res.data.data);
      loggedIn(res.data.data);
      push(to);
    },
    [setUser, push]
  );

  const sendAuthReq = async (url, data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`/users/${url}`, data);
      setter(res);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data);
      setIsLoading(false);
    }
  };

  const getMe = useCallback(async () => {
    try {
      const res = await axios.get('/users/me');
      setter(res);
    } catch (error) {
      setError(true);
      push('/login');
    }
  }, [push, setter]);

  return { sendAuthReq, isLoading, error, getMe };
};
