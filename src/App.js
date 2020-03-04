import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, withRouter } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import { connect } from 'react-redux';
import * as actions from './store/actions/actionCreators';

import { theme } from './styles/theme';

import Navbar from './components/navbar';
import RegisterLogin from './views/registerLogin';
import GameView from './views/game';

function App(props) {
  useEffect(() => {
    const token = window.localStorage.getItem('key');
    if (token) {
      props.setLoggedInUser(token);
    }
  }, [props.location]);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Route exact path="/" component={RegisterLogin} />
      <Route path="/cave" component={GameView} />
    </ThemeProvider>
  );
}

export default withRouter(connect(state => state, actions)(App));
