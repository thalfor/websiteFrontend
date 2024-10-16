//
import styled from 'styled-components';
//
export const Container = styled.div`

  position: relative;
  min-height: 100%;

  width: 100%;
  padding: 0 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 3rem;

  h1 {
    margin-top: 7rem;
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
`;
//
export const Courses = styled.div`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  position: relative;
  min-height: 100%;
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
      align-items: right;
  
      width: 27rem;
      padding: 2rem;
    }
  }


  > .formation {
    //border: 1px solid white;
    font-size: 1.7rem;

    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    height: 100%;
    width:40rem;
  }



`;
//