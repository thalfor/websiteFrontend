//
import styled from 'styled-components';
//
export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  display: flex;
  flex-direction: column;
  width: 100%;
  //height: 100vh;
  margin-top: 6rem;
`;
//