//
import { createGlobalStyle } from 'styled-components';
//
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  html {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font-family: "Afacad Flux";
    min-height: 100dvh;
  }

  main {
    padding: 0 25rem;
    margin-top: 5rem;
    flex-grow: 1;
  }
  

  /*
  ::-webkit-scrollbar {
    width: 2rem;
  }
  */

`;
//