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
    height: 100%;    
  }

  html {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font-family: "Afacad Flux";
    height: calc(100% - 5rem);
  }

  main {
    padding: 0 25rem;
    margin-top: 5rem;
    height: calc(100% - 68px);
  }
  

  /*
  ::-webkit-scrollbar {
    width: 2rem;
  }
  */

`;
//