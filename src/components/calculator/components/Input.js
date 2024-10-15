//
import styled from 'styled-components';
//
export const Container = styled.div`

  height: 10rem;
  width: 30rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;

  border-radius: 5%;

  padding: 1rem;
  border: 1px solid gray;

  .latest {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    font-size: 2.4rem;
  }

  .current {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    flex: 1;
    font-size: 1.8rem;
  }

`;
//