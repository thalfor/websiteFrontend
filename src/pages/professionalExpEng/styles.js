//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  > .job {
    background-color: #4caf50;
    color: white;

    width: 20rem;
    height: 38rem;
    font-size: 1.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    border: 2px solid white;

    margin: 3rem;
    border-radius: .3rem;
  }
`;
//