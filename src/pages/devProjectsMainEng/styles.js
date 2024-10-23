//
import styled from 'styled-components';
//
export const Container = styled.div`

  font-size: 1.5rem;
  
  display: flex;
  flex-direction: column;
  text-align: center;
  
  > p {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  > p a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    }
    
  .portfolioLinks {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    padding: 3rem;

    font-size: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }


  @media(min-width: 768px){

    font-size: 2rem;
    
    display: flex;
    flex-direction: column;
    text-align: center;
    
    > p {
      margin-top: 3rem;
      font-size: 2rem;
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
  }
`;
//