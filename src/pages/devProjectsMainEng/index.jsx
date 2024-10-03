//
import { Container, Menu, Content } from './styles';
import { Navbar } from '../../components/navBar';
import { Link } from 'react-router-dom';

export function DevProjectsEng() {
  return (
    <Container>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Menu>
          <Link to="/DevProjectsEng/DevProjectsWebsiteEng" style={{ textDecoration: 'none' }}>This Website</Link>
          <Link to="/DevProjectsEng/DevProjectsAnalogClockEng" style={{ textDecoration: 'none' }}>Analog Clock</Link>
          <Link to="/DevProjectsEng/DevProjectsCalculatorEng" style={{ textDecoration: 'none' }}>Calculator</Link>
          <Link to="/DevProjectsEng/DevProjectsPostitEng" style={{ textDecoration: 'none' }}>Post It</Link>
          <Link to="/DevProjectsEng/DevProjectsLoginEng" style={{ textDecoration: 'none' }}>Login</Link>
          <Link to="/DevProjectsEng/DevProjectsUrlShrinkEng" style={{ textDecoration: 'none' }}>URL Shrink</Link>
        </Menu>
        <Content>
          <h1>My Portfolio</h1>
          <p>
            Welcome!<br />
            Here's my ongoing portfolio, feel free to check it out! In each page there's a description of what was done as well as the project itself.<br />
            This page will grow as I grow as a JavaScript developer. I do not post every project that I make here, just the ones that I find more relevant at the moment.
            <br />
            <br />
            You can check all of my projects at my GitHub account.
          </p>
        </Content>
      </div>
    </Container>
  );
}
//