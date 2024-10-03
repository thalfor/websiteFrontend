//
import styled from 'styled-components';
//
export const Menu = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundComponents};
  color: ${({ theme }) => theme.colors.text};

  z-index: 1;
  top: 0;
  left: 0;
  position: fixed;
  overflow-x: hidden;
  
  width: 15rem;
  height: 100vh;
  font-size: 2rem;
  
  padding: 1rem;
  margin-top: 5rem;
  
  display: flex;
  flex-direction: column;
  
  //border: 1px solid black;  

  > div {
    display: grid;
    justify-content: center;
  }
  
  a {
    display: flex;
    flex-direction: column;
    margin: 1rem 1rem;
    color: ${({ theme }) => theme.colors.text};
  }
`;
//