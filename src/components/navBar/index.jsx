//
import { Container } from './styles';
//
export function Navbar(){

  return(
    <Container>
      <header className='header'>
        <nav className='navbar'>
          <a href="/">Home</a>
          <a href="/BioEng">About Me</a>
          <a href="/BlogMainEng">Blog</a>
          <a href="/HobbiesEng">Hobbies</a>
          <a href="/ProfessionalExpEng">Career</a>
          <a href="/DevProjectsEng">Portfolio</a>
        </nav>

      </header>
    </Container>
  );
};
//        <div className="brand-name">Thales Fornazari</div>
//        <a href="/" className='language'>Eng / PtBr</a>
/*
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
*/