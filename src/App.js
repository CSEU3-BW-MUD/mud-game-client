import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import { theme } from './styles/theme';

import Navbar from './components/navbar';
import RegisterLogin from './views/registerLogin';
import GameView from './views/game';

function App(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    setLoggedIn(false);
    window.localStorage.clear();
  };

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
      <Route
        exact
        path="/"
        render={props => <RegisterLogin {...props} isLoggedIn={isLoggedIn} />}
      />
      <Route
        path="/cave"
        render={props => <GameView {...props} isLoggedIn={isLoggedIn} />}
      />
    </ThemeProvider>
  );
}

export default withRouter(App);
