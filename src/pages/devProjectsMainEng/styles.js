//
import styled from 'styled-components';
//
export const Container = styled.div`
  color: ${({ theme }) => theme.colors.fern_green};
  background-color: ${({ theme }) => theme.colors.nyanza};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;
//
export const Menu = styled.div`
  color: ${({ theme }) => theme.colors.celadon_2};
  background-color: ${({ theme }) => theme.colors.mantis};
  width: 20rem;
  height: 100vh;
  padding: 1rem;
  margin-top: 5rem;
  font-size: 3rem;
  

  a {
    display: block;
    margin: 1rem 1rem;
    color: ${({ theme }) => theme.colors.celadon_2};
  }
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
