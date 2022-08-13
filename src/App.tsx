import React from 'react';
import { Reset } from 'styled-reset';

import GlobalStyle from './GlobalStyle';
import Header from './components/UI/organisms/Header';
import CookiePopup from './components/UI/organisms/CookiePopup';
import QuestionPopup from './components/UI/organisms/QuestionPopup';
import Main from './components/pages/Main';
import Footer from './components/UI/organisms/Footer';

const App = () => (
  <React.Fragment>
    <Reset />
    <GlobalStyle />
    <Header />
    <CookiePopup />
    <QuestionPopup />
    <Main />
    <Footer />
  </React.Fragment>
);

export default App;
