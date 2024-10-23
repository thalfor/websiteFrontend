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
    height: 100vh;
  }

  html {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    -webkit-font-smoothing: antialiased;
    font-family: "Afacad Flux";
    height: 100vh;
  }

  main {
    padding: 1rem 2rem;
    margin-top: 5rem;
    flex-grow: 1;
  }

  @media (min-width: 768px) {
    main {
      padding: 0 25rem;
      margin-top: 5rem;
      flex-grow: 1;
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

  }

  /*
  ::-webkit-scrollbar {
    width: 2rem;
  }
  */

`;
//