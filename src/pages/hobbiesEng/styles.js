//
import styled from 'styled-components';
//
export const Container = styled.div`

font-size: 1.5rem;

display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;

h1 {
  font-size: 3rem;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
}

.masterHobbyBox {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.hobbyBox {
  border: 1px solid white;

  height: 24rem;
  width: 25rem;
  border-radius: 2rem;
  padding: 1rem 1rem 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.3rem;
}

.hobbyBox p:first-child {
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  padding: 0 0 .2rem 0;
}

.hobbyBox img {
  border-radius: 10%;
  height: 14rem;
  margin-top: 1rem;
}

  @media(min-width: 768px){
    font-size: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
    padding-bottom: 3rem;

    h1 {
      font-size: 6rem;
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
    }

    .masterHobbyBox {
      display: grid;
      grid-template-columns: 40rem 40rem 40rem;
      grid-gap: 2rem;    
    }

    .hobbyBox {
      border: 1px solid white;

      height: 34rem;
      width: 40rem;
      border-radius: 2rem;
      padding: 2rem 2rem 0 2rem;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .hobbyBox p:first-child {
      font-size: 3rem;
      display: flex;
      justify-content: center;
      padding: 0 0 1rem 0;
    }

    .hobbyBox img {
      border-radius: 10%;
      height: 17rem;
      margin-top: 2.5rem;
    }
  }
`;
//