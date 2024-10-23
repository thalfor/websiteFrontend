//
import styled from 'styled-components';
//
export const Container = styled.div`

  padding: 1.5rem 0;

  display: flex;
  flex-direction: column;
  width: 100%;
  font-size: 1.5rem;

  .codeblock01 {
    width: auto;
    display: flex;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media(min-width: 768px){
    padding-top: 5rem;

    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 2rem;

    .codeblock01 {
      width: auto;
      display: flex;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
//