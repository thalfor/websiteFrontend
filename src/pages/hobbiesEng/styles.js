//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.nyanza};
  color: ${({ theme }) => theme.colors.fern_green};

  overflow: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;

  padding: 35rem 3rem 3rem 3rem;

  font-size: 2rem;

`;
//