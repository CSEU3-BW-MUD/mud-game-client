import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import { theme } from './styles/theme';

import Navbar from './components/navbar';
import RegisterLogin from './views/registerLogin';
import gameView from './views/game';

function App(props) {
  const [ isLoggedIn, setLoggedIn ] = useState(false);

  const logout = () => {
    setLoggedIn(false);
    window.localStorage.clear();
  }

  useEffect(() => {
    const token = window.localStorage.getItem('key');

    if (token) {
      setLoggedIn(true);
    }
  }, [props.location]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar isLoggedIn={isLoggedIn} logout={logout} />
      <Route exact path="/" component={RegisterLogin} />
      <Route path="/cave" component={gameView} />
    </ThemeProvider>
  );
}

export default withRouter(App);
