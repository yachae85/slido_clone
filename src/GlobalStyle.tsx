import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
    padding-top: 80px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }
`;

export default GlobalStyle;
