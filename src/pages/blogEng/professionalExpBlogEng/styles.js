//
import styled from 'styled-components';
//
export const Container = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }

  .paragraph {
    word-wrap: break-word;
  }

  .links {
    margin-top: 4rem;
    font-size: 2.5rem;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }


  @media(min-width: 768px){
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    padding-bottom: 3rem;
    
    h1 {
      font-size: 4rem;
    }

    p {
      font-size: 2rem;
    }

    .links {
      margin-top: 4rem;
      font-size: 2.5rem;

      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;
//