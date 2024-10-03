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

/*
  [data-theme='light']{
    --body-background: ${({ theme }) => theme.colors.nyanza};
    --body-text-color: ${({ theme }) => theme.colors.fern_green};
    --navbar-background: ${({ theme }) => theme.colors.mantis};
    --navbar-text-color: ${({ theme }) => theme.colors.celadon_2};
  }

  [data-theme='dark']{
    --body-background: ${({ theme }) => theme.colors.rich_black};
    --body-text-color: ${({ theme }) => theme.colors.almond};
    --navbar-background: ${({ theme }) => theme.colors.oxford_blue};
    --navbar-text-color: ${({ theme }) => theme.colors.rose_quartz};
  }
*/

  body {
    background-color: ${({ theme }) => theme.colors.nyanza};
    color: ${({ theme }) => theme.colors.fern_green};
    -webkit-font-smoothing: antialiased;
    font-family: "Afacad Flux";
  }
`;
//