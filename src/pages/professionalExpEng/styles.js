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
    width: 90rem;
    height: 50rem;

    font-size: 1.7rem;

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
    margin: 0 1rem;
  }

`;
//