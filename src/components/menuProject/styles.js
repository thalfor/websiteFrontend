//
import styled from 'styled-components';
//
export const Menu = styled.div`

  font-size: 2rem;
  width: 100%;

  .menu-icon {
    display: none;
  }

  .menuMaster {
    background-color: ${({ theme }) => theme.colors.background};
    font-size: 1.5rem;
  }
  
  .menuProject {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    gap: 2rem;
    background-color: ${({ theme }) => theme.colors.background};
  }
  
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }


  /* Desktop */
  @media (min-width: 768px) {
    .menu-icon {
      display: none;
    }

    .menuMaster {
      //border: 1px solid white;
      position: fixed;
      margin-top: 5rem;
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.background};
      display: flex;
      flex-direction: row;
      justify-content: center;
      font-size: 2.5rem;

      a {
        //border: 1px solid white;
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .menuProject {
      //border: 1px solid white;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.background};
      margin: 0 30rem
    }
  }


`;
//
/*
    width: 12rem;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.backgroundComponents};
    padding: 0 1rem;
*/