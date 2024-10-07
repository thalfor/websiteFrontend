//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 6rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 3rem;


  > div {
    width: 95rem;
    height: 55rem;

    font-size: 1.5rem;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    //border: 1px solid white;

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