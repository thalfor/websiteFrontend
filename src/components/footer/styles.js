//
import styled from 'styled-components';
//
export const Container = styled.div`

  background-color: ${({ theme }) => theme.colors.backgroundComponents};

  text-align: left;
  padding: 1rem 25rem 1rem 25rem;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  margin-top: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;

  .textEnding {
    font-size: 1.8rem;
  }

  .social {
    font-size: 1.8rem;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-top: 1rem
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

`;
