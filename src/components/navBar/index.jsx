import { Container } from './styles';
import menuIcon from '../../assets/icons8-menu.svg'; // Ensure the path to the menu icon image is correct.
import { useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <header className='header'>

        
        <div className='menu-icon' onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>

        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
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
}
