//
import { Container } from './styles';
import { Navbar } from '../../components/navBar';
import { MenuProject } from '../../components/menuProject';
//
export function DevProjectsEng() {
  return (
    <div>
    <Navbar />
    <MenuProject />
    <Container>
      <h1>My Portfolio</h1>
      <p>
        Welcome!<br />
        Here's my ongoing portfolio, feel free to check it out! In each page there's a description of what was done as well as the project itself.<br />
        This page will grow as I grow as a JavaScript developer. I do not post every project that I make here, just the ones that I find more relevant at the moment.
        <br />
        <br />
        You can check all of my projects at my <a href="https://github.com/thalfor" target="_blank">GitHub account</a>.
      </p>
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