//
import styled from 'styled-components';
//
export const Container = styled.div`

  background-color: ${({ theme }) => theme.colors.backgroundComponents};

  text-align: left;
  padding: 1rem 1rem;
  margin-top: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 2rem;

  .textEnding {
    font-size: 1.5rem;
    margin: auto;
  }

  .social {
    font-size: 1.8rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: right;
    gap: 2rem;
    margin-top: 1rem
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

  @media(min-width: 768px){
    background-color: ${({ theme }) => theme.colors.backgroundComponents};

    text-align: left;
    padding: 1rem 25rem 1rem 25rem;
    margin-top: auto;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 5rem;

    .textEnding {
      font-size: 1.8rem;
    }

    .social {
      font-size: 1.8rem;
      display: flex;
      flex-direction: row;
      gap: 4rem;
      margin-top: 1rem
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }

`;
