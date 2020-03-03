import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Route } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';

import { theme } from './styles/theme';

import Navbar from './components/navbar';
import RegisterLogin from './views/registerLogin';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Route exact path="/" component={RegisterLogin} />
    </ThemeProvider>
  );
}

export default App;
