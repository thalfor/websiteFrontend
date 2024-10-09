//
import styled from 'styled-components';
//
export const Container = styled.div`
  width: 100%;

  padding: 8rem;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    font-size: 4rem;
  }

  p {
    font-size: 2rem;
  }

  .colorblindMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .colorblind {
      border-radius: 50%;
      height: 20rem;
    }
  }

  .babyMeMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .babyMe {
      border-radius: 40%;
      height: 20rem;
      width: 25rem;
    }
  }

  .musicMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .music {
      border-radius: 50%;
      height: 20rem;
      width: 25rem;
    }
  }

  .tattooMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .tattoo {
      border-radius: 30%;
      height: 20rem;
      width: 25rem;
    }
  }

  .taikoMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .taikoImages {

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      .taiko {
        border-radius: 30%;
        height: 20rem;
      }
    }
  }

  .universityMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .universityImages {

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      .university {
        border-radius: 30%;
        height: 20rem;
      }
    }
  }

  .saopauloMaster {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.7rem;

    .saopauloImages {

      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 2rem;

      .saopaulo {
        border-radius: 30%;
        height: 20rem;
      }
    }
  }






  .links {
    margin-top: 4rem;
    font-size: 2.5rem;

    text-decoration: none;
    color: ${({ theme }) => theme.colors.text};
  }

`;
//