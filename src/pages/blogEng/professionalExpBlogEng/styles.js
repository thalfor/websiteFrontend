//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;

  padding: 8rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

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

`;
//