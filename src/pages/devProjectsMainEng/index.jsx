//
import { Container, Menu, Content } from './styles';
import { Navbar } from '../../components/navBar';
import { Link } from 'react-router-dom';
//
export function DevProjectsEng(){
  return(
    <Container>
      <Navbar />
      <Menu>
        <Link to="/DevProjectsEng/DevProjectsWebsiteEng">This Website</Link>
        <Link to="/DevProjectsEng/DevProjectsAnalogClockEng">Analog Clock</Link>
        <Link to="/DevProjectsEng/DevProjectsCalculatorEng">Calculator</Link>
        <Link to="/DevProjectsEng/DevProjectsPostitEng">Post It</Link>
        <Link to="/DevProjectsEng/DevProjectsLoginEng">Login</Link>
        <Link to="/DevProjectsEng/DevProjectsUrlShrinkEng"></Link>
      </Menu>
      <Content>
        <h1>My Portfolio</h1>
        <p>
          Welcome!<br></br>
          Here's my on going portfolio, feel free to check it out! In each page there's a description of what was done as long with the project itself.<br></br>
          This page will grow as i grow as a javascript developer. I do not post every project that i make here, just the ones that i find more relevante for the moment.
          <br></br>
          <br></br>
          You can check all of my projects at my Github account.
        </p>
      </Content>
    </Container>
  );
}
//