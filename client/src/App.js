import React, { useContext, useEffect } from 'react';
import './App.scss';
import { Layout } from './hoc/Layout/Layout';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Chatting } from './containers/Chatting/Chatting';
import { Login } from './containers/Auth/Login/Login';
import { Signup } from './containers/Auth/Signup/Signup';
import AuthContext from './context/Auth/AuthContext';
import { useAuth } from './hooks/useAuth';
import ThemeContext from './context/Theme/ThemeContext';
import { useLocation } from 'react-router-dom';

function App() {
  const { user } = useContext(AuthContext);
  const { getMe, error } = useAuth();
  const { isDark } = useContext(ThemeContext);
  const { pathname } = useLocation();

  useEffect(() => {
    getMe(pathname);
  }, [getMe]);

  let render = (
    <Layout>
      <Switch>
        <Route exact path="/">
          <div
            style={{
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <h1>Select User</h1>
          </div>
        </Route>
        <Route path="/chat/:username">
          <Chatting />
        </Route>
      </Switch>
    </Layout>
  );

  if (!user) {
    render = (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {error ? (
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Redirect to="/" />
          </Switch>
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    );
  }

  return (
    <div className={['App', isDark ? 'Dark' : 'Light'].join(' ')}>{render}</div>
  );
}

export default App;
