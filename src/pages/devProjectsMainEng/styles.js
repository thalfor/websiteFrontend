//
import styled from 'styled-components';
//
export const Container = styled.div`

  font-size: 2rem;
  //border: 1px solid white;
  margin-top: 5rem;
  
  display: flex;
  flex-direction: column;
  text-align: center;
  
  > p {
    margin-top: 3rem;
  }

  > p a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    }
    
  .portfolioLinks {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    padding: 3rem;

    font-size: 2.5rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }

`;
/*
export const Container = styled.div`
  color: ${({ theme }) => theme.colors.fern_green};
  background-color: ${({ theme }) => theme.colors.nyanza};
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
//
export const Content = styled.div`
  color: ${({ theme }) => theme.colors.fern_green};
  background-color: ${({ theme }) => theme.colors.nyanza};
  font-size: 3rem;
  flex: 1;
  padding: 2rem;
  margin-top: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
`;
//
*/