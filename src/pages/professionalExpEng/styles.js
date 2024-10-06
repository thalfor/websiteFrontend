import styled from 'styled-components';

export const CarouselContainer = styled.div`
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

body { font-family: sans-serif; }

.gallery {
  background: #EEE;
}

.gallery-cell {
  width: 66%;
  height: 200px;
  margin-right: 10px;
  background: #8C8;
  counter-increment: gallery-cell;
}

/* cell number */
.gallery-cell:before {
  display: block;
  text-align: center;
  content: counter(gallery-cell);
  line-height: 200px;
  font-size: 80px;
  color: white;
}
`;









/*


//
export const Container = styled.div`
  height: 100vh;
  //width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  overflow: auto;

  > h1 {
    margin-top: 6rem;
    display: flex;
    justify-content: center;
  }  
`;

  export const Jobs = styled.div`
  



  > .jobs {
    border: 1px solid white;
    padding: 1rem;
    width: 20rem;
    height: 38rem;

  }
`;
//
*/