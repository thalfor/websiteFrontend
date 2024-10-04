//
import { Menu } from './styles';
import menuIcon from '../../assets/icons8-menu.svg';
import { useState } from 'react';
//
export function MenuProject() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Menu>
      <div className="menuMaster">
        <div className='menu-icon' onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu Icon" />
        </div>

        <div className={`menuProject ${isOpen ? 'active' : ''}`}>
          <a href="/DevProjectsEng" >Portfolio</a>
          <a href="/DevProjectsEng/DevProjectsWebsiteEng" >This Website</a>
          <a href="/DevProjectsEng/DevProjectsAnalogClockEng" >Analog Clock</a>
          <a href="/DevProjectsEng/DevProjectsCalculatorEng" >Calculator</a>
          <a href="/DevProjectsEng/DevProjectsPostitEng" >Post It</a>
          <a href="/DevProjectsEng/DevProjectsLoginEng" >Login</a>
          <a href="/DevProjectsEng/DevProjectsUrlShrinkEng" >URL Shrink</a>
        </div>
      </div>
    </Menu>
  );
}
//