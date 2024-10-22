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

        <nav className='navHome'>
          <a href="/">Thales Fornazari</a>
        </nav>
        <nav className={`navbar ${isOpen ? 'active' : ''}`}>
          <a href="/AboutMe">About Me</a>
          <a href="/Hobbies">Hobbies</a>
          <a href="/Blog">Blog</a>
          <a href="/Career">Career</a>
          <a href="/Portfolio">Portfolio</a>
        </nav>
      </header>
    </Container>
  );
}
