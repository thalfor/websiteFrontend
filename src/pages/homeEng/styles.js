//
import styled from 'styled-components';
//
export const Container = styled.div`

  display: flex;
  flex-direction: column;

  .presentation {
    //border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }

  h1 {
    font-size: 2rem;
  }

  img {
    border-radius: 50%;
    height: 20rem;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 2rem;

    padding: 2rem;
  }

  p:nth-child(4){
    display: flex;
    justify-content: left;
    align-items: left;
  }

  p:last-child{
    display: flex;
    justify-content: left;
    align-items: left;
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }



  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;

    margin-top: 2.5rem;
    margin-right: 2.5rem;
    margin-left: 2.5rem;
    
    .presentation {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      gap: 10rem;
    }

    h1 {
      font-size: 3.2rem;
      width: 50%;    
    }

    img {
      border-radius: 50%;
      height: 30rem;
    }

    p {
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 2.5rem;

      padding: 2rem;
    }

    p:nth-child(4){
      display: flex;
      justify-content: left;
      align-items: left;
    }

    p:last-child{
      display: flex;
      justify-content: left;
      align-items: left;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.text};
    }

  }
  
  `;
//
//
/*
//
export const Container = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  width: 100%;
  height: 100dvh;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow: auto;
`;
//
export const Brand = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
  width: 100%;
  
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7.2rem 2rem 1rem 2rem;

  > h1 {
    text-align: center;
    margin: 0 0 2rem 0;
  }

  > img {
    border-radius: 50%;
    height: 20rem;
    margin: 0;
  }

  @media (min-width: 768px) {

    width: 100%;
    
    font-size: 2rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6rem 3rem 1rem 3rem;

    > h1 {
      text-align: left;
      margin: 0 5rem 0 5rem;
    }

    > img {
      border-radius: 50%;
      height: 30rem;
      margin-right: 10rem;
    }
  }
`;

export const Paragraph = styled.div`
  * {
    padding: 0;
    margin: 0;
    box-sizing: inherit;
  }
  width: 100%;
  
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  

  > p:nth-child(2) {
    text-align: center;
  }

  @media (min-width: 768px) {
    font-size: 4rem;
    margin-top: 2rem;
  }
`;
//
*/