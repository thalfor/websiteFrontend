//
import styled from 'styled-components';
//
export const Components = styled.div``;
//
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  
  font-size: 2rem;
  margin-top: 5rem;
  margin-left: 15rem;
  border: 1px solid black;

  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;

  > p a {
    text-decoration: none;
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