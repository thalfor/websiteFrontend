//
import styled from 'styled-components';
//
export const Container = styled.div`
  
  padding: 1.5rem 0;

  font-size: 1.5rem;

  .calculator {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .content {
    margin-top: 3rem;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  .codeblock {
    width: auto;
    display: flex;
  }

  @media(min-width: 768px){
    padding-top: 5rem;

    font-size: 2rem;

    .calculator {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    .content {
      margin-top: 3rem;
      font-size: 2rem;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }

    .codeblock {
      width: auto;
      display: flex;
    }
  }
`;
//