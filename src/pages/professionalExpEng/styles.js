//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.nyanza};
  color: ${({ theme }) => theme.colors.fern_green};
  margin-top: 3rem;
  padding: 4rem;
  

  > p {
    font-size: 2rem;
  }
`;
//