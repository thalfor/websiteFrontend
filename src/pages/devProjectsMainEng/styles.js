//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.nyanza};
  color: ${({ theme }) => theme.colors.fern_green};

  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
`;
//
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > h1 {
    font-size: 4.8rem;
    margin-top: 5rem;
  }

  > p {
    font-size: 2.4rem;
    padding: 1rem;
  }
`;
//
export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  text-decoration: none;
`;
//