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
        Here&apos;s my ongoing portfolio, feel free to check it out! In each page there&apos;s a description of what was done as well as the project itself.<br />
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
        <a href="/Portfolio/ThisWebsite"><strong>This Website</strong></a>
        <a href="/Portfolio/AnalogClock"><strong>Analog Clock</strong></a>
        <a href="/Portfolio/Calculator"><strong>Calculator</strong></a>
        <a href="/Portfolio/Login"><strong>Login Page</strong></a>
        <a href="/Portfolio/UrlShrink"><strong>UrlShrink</strong></a>
        <a href="/Portfolio/TwitterScraping"><strong>Twitter Scraping</strong></a>
      </div>
    </Container>
    </div>
  );
}
//
//<a href="/Portfolio/UrlShrink"><strong>Url Shrinker (on going)</strong></a>