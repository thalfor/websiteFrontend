import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.nyanza};
  color: ${({ theme }) => theme.colors.fern_green};
  overflow: auto;
`;

// Default mobile-first styles
export const Brand = styled.div`
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

  // Desktop styles
  @media (min-width: 768px) {
    width: 100%;
    font-size: 3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 6rem 0 1rem 0;

    > h1 {
      text-align: left;
      margin: 0 5rem 0 5rem;
    }

    > img {
      border-radius: 50%;
      height: 40rem;
      margin-right: 10rem;
    }
  }
`;

export const Paragraph = styled.div`
  width: 100%;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  

  > p:nth-child(2) {
    text-align: center;
  }

  // Desktop styles
  @media (min-width: 768px) {
    font-size: 4rem;
    margin-top: 2rem;
  }
`;





/*
//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.nyanza};
  color: ${({ theme }) => theme.colors.fern_green};
//  background-color: ${({ theme }) => theme.colors.rich_black};
//  color: ${({ theme }) => theme.colors.almond};
`;
//
export const Brand = styled.div`
  width: 100%;
  font-size: 3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5rem 5rem 1rem 5rem;

  > h1 {
    text-align: left;
    margin: 0 20rem 0 10rem;
  }

  > img {
    border-radius: 50%;
    height: 40rem;
    margin-right: 10rem;
  }
`;
//
export const Paragraph = styled.div`
    width: 100%;
    font-size: 2.2rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1rem;

    > p:nth-child(2){
      text-align: left;
    }
`;
//
*/