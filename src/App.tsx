import React from 'react';
import { Reset } from 'styled-reset';
import Header from './components/UI/organisms/Header';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <React.Fragment>
    <Reset />
    <GlobalStyle />
    <Header />
  </React.Fragment>
);

export default App;
