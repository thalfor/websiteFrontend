//
import styled from 'styled-components';
//
export const Container = styled.div`

  padding: 12rem 25rem 5rem 25rem;

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



`;
//