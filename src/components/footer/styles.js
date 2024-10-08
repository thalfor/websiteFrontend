//
import styled from 'styled-components';
//
export const Container = styled.div`

  background-color: ${({ theme }) => theme.colors.backgroundComponents};

  //border: 1px solid white;

  text-align: left;
  padding: 2.5rem;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 5rem;

  .textEnding {
    font-size: 1.8rem;
    margin-left: 5rem;
  }

  .social {
    margin-right: 5rem;
    font-size: 1.8rem;
    display: flex;
    flex-direction: row;
    gap: 4rem;
    margin-top: 1rem
  }

  a {
    text-decoration: none;
  }

  a:link {
    color: red;
  }

`;
