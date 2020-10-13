import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';
import axios from '../axios';
import { useHistory } from 'react-router-dom';
import { ErrorContext } from './Error';
import { isEmail } from '../isEmail';
import { socket } from '../socket';

export const AuthContext = createContext({
  user: null,
  setUser: () => {},
  authLoading: true,
  sendAuthReq: async () => {},
});

const emitLogin = (user) => {
  socket.emit('loggedIn', user);
};

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { setError } = useContext(ErrorContext);
  const { push } = useHistory();

  const getMe = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('/users/me');
      const user = res.data.data;
      setUser(user);
      emitLogin(user);
      push('/');
    } catch (error) {
      push('/login');
    }
    setIsLoading(false);
  }, [push]);

  useEffect(() => {
    getMe();
  }, [getMe]);

  const sendAuthReq = async (url, data) => {
    if (data.username && data.username.replace(/\s/g, '') === '') {
      return setError({ message: 'Username not valid.' });
    }

    if (!isEmail(data.email) || data.password.length < 8) {
      return setError({ message: 'Try again with a valid values.' });
    }

    if (data.passwordConfirm && data.passwordConfirm !== data.password) {
      return setError({ message: 'Passwords does not match.' });
    }
    setIsLoading(true);
    try {
      const res = await axios.post(`/users${url}`, data);
      const user = res.data.data;
      setUser(user);
      emitLogin(user);
      push('/');
    } catch (error) {
      setError(error.response.data);
    }
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, authLoading: isLoading, sendAuthReq }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
