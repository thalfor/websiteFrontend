//
import styled from 'styled-components';
//
export const Container = styled.div`

  padding: 1.5rem 0;
  font-size: 1.5rem;

  .codeblock {
    width: auto;
    display: flex;
  }
  
  .puppeteerExtraImg {
    height: 35rem;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media(min-width: 768px){
    padding-top: 5rem;
    font-size: 2rem;

    .codeblock {
      width: auto;
      display: flex;
    }
    
    .puppeteerExtraImg {
      height: 35rem;
    }
  }
`;
//