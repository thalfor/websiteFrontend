//
import styled from 'styled-components';
//
export const Container = styled.div`

  font-size: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  .postsMaster {

    font-size: 1.5rem;

    margin-top: 2rem;
    
    display: flex;
    flex-direction: column;
    gap: 1rem;

    img {
      height: 15rem;
      width: 22rem;
      border-radius: 7%;
    }

    .post {
      border: 1px solid white;
      border-radius: 7%;

      height: 23rem;
      width: 24rem;
      padding: 1rem;

      display: flex;
      flex-direction: column;
      justify-content: space-between;
      
      .datePost {
        font-size: 1.2rem;
      }
    }
  }

  .links {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }


  @media(min-width: 768px){
    width: 100%;
    font-size: 2rem;

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
  }
`;
//