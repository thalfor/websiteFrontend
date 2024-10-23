//
import styled from 'styled-components';
//
export const Project = styled.div`

  height: 25rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .inputAll {
    width: 13rem;
  }

  .wrapper {

    display: flex;
    flex-direction: row;
    gap: 2rem;

    .boxSign {
      border: 1px solid white;
      border-radius: 1rem;
      padding: 2rem;
      font-size: 1.5rem;

      > h1 {
        font-size: 2.3rem;
      }

      height: 20rem;
      width: 17rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }

    .boxChange {
      border: 1px solid white;
      border-radius: 1rem;
      padding: 2rem;
      font-size: 2rem;

      > h1 {
        font-size: 2.3rem;
      }

      height: 32.5rem;
      width: 22rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
    }
  }

  @media(min-width: 768px){
    height: 35rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .wrapper {

      display: flex;
      flex-direction: row;
      gap: 4rem;

      .boxSign {
        border: 1px solid white;
        border-radius: 1rem;
        padding: 2rem;
        font-size: 2rem;

        > h1 {
          font-size: 2.3rem;
        }

        height: 25rem;
        width: 22rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }

      .boxChange {
        border: 1px solid white;
        border-radius: 1rem;
        padding: 2rem;
        font-size: 2rem;

        > h1 {
          font-size: 2.3rem;
        }

        height: 32.5rem;
        width: 22rem;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
      }
    }
  }
`;
//