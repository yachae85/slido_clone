import React from 'react';
import { Reset } from 'styled-reset';
import GlobalStyle from './GlobalStyle';

const App = () => (
  <React.Fragment>
    <Reset />
    <GlobalStyle />
    <div>hello world!!</div>
  </React.Fragment>
);

export default App;
