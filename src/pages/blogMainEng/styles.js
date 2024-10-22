//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
//  height: 100vh;

  font-size: 2rem;
  //padding: 8rem 8rem 1rem 8rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 6rem;
    margin-bottom: 3rem;
  }

  .postsMaster {

    font-size: 2rem;

    margin-top: 4rem;
    
    display: grid;
    grid-template-columns: 25rem 25rem 25rem 25rem;
    grid-gap: 1rem;

    img {
      height: 15rem;
      width: 22rem;
      border-radius: 7%;
    }

    .post {
      border: 1px solid white;
      border-radius: 7%;

      height: 27rem;
      width: 24rem;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      .datePost {
        font-size: 1.5rem;
      }
    }
  }

  .links {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

`;
//