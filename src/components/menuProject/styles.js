//
import styled from 'styled-components';
//
export const Menu = styled.div`

  font-size: 2rem;
  width: 100%;

  .menuMaster {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.backgroundComponents};
    display: flex;
    justify-content: flex-end;
    z-index: 1000;
  }

  .menu-icon {
    display: block;
    position: absolute;
    top: 0.9rem;
    left: 1rem;
    z-index: 1100;
    cursor: pointer;
  }

  .menu-icon img {
    width: 3rem;
    height: 3rem;
  }

  .menuProject {
    width: 12rem;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.colors.backgroundComponents};
    padding: 0 1rem;
  }

  .menuProject.active {
    display: flex;
    margin-top: 3rem;
    //border: 1px solid white;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }


  /* Desktop */
  @media (min-width: 768px) {
    .menu-icon {
      display: none;
    }

    width: 15rem;
    height: 100vh;
    font-size: 2rem;
    top: 0;
    left: 0;
    position: absolute;
    overflow-x: hidden;
    z-index: 1;

    > div div:last-child {
      display: flex;
      flex-direction: column;
      justify-content: top;
      width: 15rem;
      height: 100vh;
      margin-top: 3rem;
    }
    
    a {
      display: flex;
      flex-direction: column;
      margin: 1rem 1rem;
      color: ${({ theme }) => theme.colors.text};
    }
  }


`;
//