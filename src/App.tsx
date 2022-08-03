import React from 'react';
import { Reset } from 'styled-reset';

import GlobalStyle from './GlobalStyle';
import Header from './components/UI/organisms/Header';
import CookiePopup from './components/UI/organisms/CookiePopup';

const App = () => (
  <React.Fragment>
    <Reset />
    <GlobalStyle />
    <Header />
    <CookiePopup />
  </React.Fragment>
);

export default App;
