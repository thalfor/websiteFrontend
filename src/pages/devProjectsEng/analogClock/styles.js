//
import styled from 'styled-components';
//
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  font-size: 2rem;
  //overflow: hidden;
  margin-top: 8rem;
`;
//
export const Content = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 2rem;
  flex: 1;
  padding: 2rem;
  margin-top: 2rem;

  h1 {
    margin-bottom: 1rem;
  }
`;
//