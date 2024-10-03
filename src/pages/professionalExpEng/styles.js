//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  margin-top: 3rem;
  padding: 4rem;
  

  > p {
    font-size: 2rem;
  }
`;
//