import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyles';

import { theme } from './styles/theme';

import Navbar from './components/navbar';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
