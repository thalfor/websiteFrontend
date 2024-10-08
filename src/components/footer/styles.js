//
import styled from 'styled-components';
//
export const Container = styled.div`

  background-color: ${({ theme }) => theme.colors.backgroundComponents};
  border: 1px solid white;

  width: 100%;
  height: 4rem;

  position:absolute;

    .footer {
      width: 100%;
      display: flex;
      flex-direction: row;
      position: relative;
      justify-content: center;
      padding: 0;
      top: unset;
    }


`;
