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
    width: 100%;
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.mantis};
//    background-color: ${({ theme }) => theme.colors.oxford_blue};
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center; 
    z-index: 1000;
  }
/*
  .brand-name {
    font-size: 2rem;
    padding-left: 2rem;
    color: ${({ theme }) => theme.colors.celadon_2};
  }
*/
  a {
    text-decoration: none;
    position: relative;
    margin-right: 2rem;
    margin-left: 2rem;
    color: ${({ theme }) => theme.colors.celadon_2};
//    color: ${({ theme }) => theme.colors.rose_quartz};
  }

  a::before{
    content: '';
    position: absolute;
    top: 100%;
    left: 0;
    height: .1rem;
    background: ${({ theme }) => theme.colors.celadon_2};;
//    background: ${({ theme }) => theme.colors.rose_quartz};;
    width: 0;
    transition: .3s;
  }

  a:hover::before {
    width: 100%;
  }
`;
//



/*
  .brand-name {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.celadon_2};
  }
    */