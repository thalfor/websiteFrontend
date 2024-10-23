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
    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    .menuMaster {
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.background};
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      font-size: 2.5rem;

      a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.text};
      }
    }

    .menuProject {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      gap: 16rem;
      background-color: ${({ theme }) => theme.colors.background};
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