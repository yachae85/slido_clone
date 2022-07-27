import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing:border-box;
    
  }

  body{
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    height: 200vh;
  }
`;

export default GlobalStyle;
