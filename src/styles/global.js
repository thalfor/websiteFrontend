//
import { createGlobalStyle } from 'styled-components';
//
export default createGlobalStyle`

  //margin-top: auto;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font-family: "Afacad Flux";
    padding: 12rem 25rem 5rem 25rem;
  }

  /*
  ::-webkit-scrollbar {
    width: 2rem;
  }
  */

`;
//