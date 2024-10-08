//
import { Container } from './styles';
//
export function DevProjectsEng() {
  return (
    <div>
    <Container>
      <h1>My Portfolio</h1>
      <p>
        Welcome!<br />
        Here's my ongoing portfolio, feel free to check it out! In each page there's a description of what was done as well as the project itself.<br />
        This page will grow as I grow as a JavaScript developer. I do not post every project that I make here, just the ones that I find more relevant at the moment.
        <br />
        <br />
        <br />
        <br />
        You can check all of my projects at my <a href="https://github.com/thalfor" target="_blank"><strong>GitHub account</strong></a>.
        <br />
        <br />
        <br />
        Here are my current display projects!
      </p>
      <div className='portfolioLinks'>
        <a href="/DevProjectsEng/DevProjectsWebsiteEng"><strong>This Website</strong></a>
        <a href="/DevProjectsEng/DevProjectsAnalogClockEng"><strong>Analog Clock</strong></a>
        <a href="/DevProjectsEng/DevProjectsCalculatorEng"><strong>Calculator</strong></a>
        <a href="/DevProjectsEng/DevProjectsPostitEng"><strong>PostIt</strong></a>
        <a href="/DevProjectsEng/DevProjectsLoginEng"><strong>Login Page</strong></a>
        <a href="/DevProjectsEng/DevProjectsUrlShrinkEng"><strong>Url Shrinker</strong></a>
      </div>
    </Container>
    </div>
  );
}
//
/*
    <Container>
      <h1>My Portfolio</h1>
      <p>
        Welcome!<br />
        Here's my ongoing portfolio, feel free to check it out! In each page there's a description of what was done as well as the project itself.<br />
        This page will grow as I grow as a JavaScript developer. I do not post every project that I make here, just the ones that I find more relevant at the moment.
        <br />
        <br />
        You can check all of my projects at my GitHub account.
      </p>
    </Container>
*/