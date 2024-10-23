//
import styled from 'styled-components';
//
export const Container = styled.div`

  min-height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 2rem;

  h1 {
    margin-bottom: 0;
  }

  > div {
    width: 85rem;
    height: 45rem;

    font-size: 1.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .job {
    border: 1px solid white;

    padding: 1rem;
    border-radius: 1rem;
    
    height: 35rem;
    width: 13rem;
  }

  .slick-slide > div {
    margin: 2rem 1rem;
  }

  .slick-center {
    transform: scale(1.05);
    transition: transform 0.6s ease;
    font-size: 1.6rem;
  }

  @media(min-width: 768px){
    min-height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 3rem;

    h1 {
      margin-bottom: 0;
    }

    > div {
      width: 95rem;
      height: 55rem;

      font-size: 1.5rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .job {
      border: 1px solid white;

      padding: 1rem;
      border-radius: 1rem;
      
      height: 37rem;
      width: 15rem;
    }

    .slick-slide > div {
      margin: 3rem 1.5rem;
    }

    .slick-center {
      transform: scale(1.12);
      transition: transform 0.6s ease;
      font-size: 1.7rem;
    }
  }
`;
//
export const Courses = styled.div`

  padding-bottom: 4rem;
  padding: 1rem;

  font-size: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  > .cousesMaster {
    font-size: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;

    > .courses {
      border: 1px solid white;
      border-radius: 1rem;
      font-size: 1.5rem;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: right;

      width: 27rem;
      padding: 1.5rem;
    }
  }


  > .formation {
    font-size: 1.5rem;

    margin: 1.5rem 0;

    display: flex;
    flex-direction: column;
    align-items: center;
}

  @media(min-width: 768px){

    padding-bottom: 4rem;

    padding: 1rem;
    margin-bottom: 3rem;

    font-size: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    > .cousesMaster {
      font-size: 2rem;

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 4rem;
      margin: 1rem 15rem;

      > .courses {
        font-size: 1.7rem;
    
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: right;
    
        width: 27rem;
        padding: 2rem;
      }
    }

    > .formation {
      font-size: 1.7rem;

      margin-top: 2rem;

      display: flex;
      flex-direction: column;
      align-items: center;

      height: 100%;
      width:40rem;
    }
  }

`;
//