//
import styled from 'styled-components';
//
export const Container = styled.div`
  font-size: 2rem;
  width: 100%;

  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 39rem;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.backgroundComponents};
    display: flex;
    justify-content: flex-end;
    height: 5rem;
    z-index: 1000;
  }

  .menu-icon {
    display: block;
    position: absolute;
    top: 0.9rem;
    right: 1rem;
    z-index: 1100;
    cursor: pointer;
  }

  .menu-icon img {
    width: 3rem;
    height: 3rem;
  }

  .navHome {
    //border: 1px solid white;
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: left;
    padding: 0;
    top: unset;
    padding-left: .5rem;
  }

  .navbar {
    width: 12rem;
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: ${({ theme }) => theme.colors.backgroundComponents};
    padding: 0 1rem;
  }

  .navbar.active {
    display: flex;
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

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 1rem;
      background-color: ${({ theme }) => theme.colors.backgroundComponents};
      display: flex;
      justify-content: flex-end;
      height: 5rem;
      z-index: 1000;
    }
    
    .navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: right;
      gap: 2rem;
      top: unset;
      padding-right: 25rem;
    }

    .navHome {
      //border: 1px solid white;
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: left;
      padding: 0;
      top: unset;
      padding-left: 25rem;
    }

    a {
      text-decoration: none;
      position: relative;
      //margin-right: 2rem;
      //margin-left: 2rem;
      margin-bottom: .2rem;
      color: ${({ theme }) => theme.colors.text};
    }

    .homeLink {

    }

    a::before{
      content: '';
      position: absolute;
      top: 100%;
      left: 0;
      height: .2rem;
      background: ${({ theme }) => theme.colors.text};;
      width: 0;
      transition: .3s;
    }

    a:hover::before {
      width: 100%;
    }
  }
`;
