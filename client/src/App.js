import React, { useContext } from 'react';
import './App.scss';
import { Layout } from './hoc/Layout/Layout';
import { Container } from '@material-ui/core';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Chatting } from './containers/Chatting/Chatting';
import { ThemeContext } from './context/Theme';
import { AuthContext } from './context/Auth';
import { Login } from './containers/Auth/Login/Login';
import { Signup } from './containers/Auth/Signup/Signup';

function App() {
  const { isDark } = useContext(ThemeContext);
  const { user, authLoading } = useContext(AuthContext);

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
        <Redirect to="/" />
      </Switch>
    </Layout>
  );

  if (!user) {
    render = (
      <div
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container fixed maxWidth="sm">
          {authLoading ? (
            <h1 style={{ textAlign: 'center' }}>Loading...</h1>
          ) : (
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/signup">
                <Signup />
              </Route>
              <Redirect to="/login" />
            </Switch>
          )}
        </Container>
      </div>
    );
  }

  return (
    <div className={['App', isDark ? 'Dark' : 'Light'].join(' ')}>{render}</div>
  );
}

export default App;
