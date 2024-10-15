//
import styled from 'styled-components';
//
export const Container = styled.div`
  
  padding: 12rem 25rem 5rem 25rem;
  width: 100%;

  font-size: 2rem;
  
  display: flex;
  flex-direction: column;
  height: auto;

  .codeblock01 {
    width: auto;
    display: flex;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

`;
//