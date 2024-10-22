//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  
  font-size: 2rem;
  //padding: 8rem 8rem 1rem 8rem;

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

    padding: 3rem;
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
      height: 40.7rem;
      width: 40.7rem;
      padding: 3rem;
    }
    img:nth-child(3) {
      border-radius: 20%;
      height: 40.7rem;
      padding: 3rem;
    }
    img:nth-child(4) {
      border-radius: 20%;
      height: 40.7rem;
      padding: 3rem;
    }
  }
`;
//