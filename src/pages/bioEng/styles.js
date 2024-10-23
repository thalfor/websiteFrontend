//
import styled from 'styled-components';
//
export const Container = styled.div`
  
  width: 100%;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 3rem;
  }

  .master {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10rem;

    padding: 1.5rem;
  }

  .master .bio {
    font-size: 1.5rem;
  }
  
  .images {
    //border: 1px solid white;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    padding: .4rem;

    img:nth-child(1) {
      border-radius: 20%;
      height: 15.7rem;
      width: 15.7rem;
      //padding: 3rem;
    }
    img:nth-child(2) {
      border-radius: 20%;
      height: 15.7rem;
      //padding: 3rem;
    }
    img:nth-child(3) {
      border-radius: 20%;
      height: 15.7rem;
      //padding: 3rem;
    }
  }

  @media(min-width: 768px){
    width: 100%;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 6rem;
    }

    .master {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 10rem;

      padding: 1.5rem;
    }

    .master .bio {
      font-size: 2.5rem;
    }
    
    .images {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      padding: .4rem;

      img:nth-child(1) {
        border-radius: 20%;
        height: 30.7rem;
        width: 30.7rem;
        padding: 3rem;
      }
      img:nth-child(2) {
        border-radius: 20%;
        height: 30.7rem;
        padding: 3rem;
      }
      img:nth-child(3) {
        border-radius: 20%;
        height: 30.7rem;
        padding: 3rem;
      }
    }
  }
`;
//