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
          <a href="/Portfolio" >Portfolio</a>
          <a href="/Portfolio/ThisWebsite" >This Website</a>
          <a href="/Portfolio/AnalogClock" >Analog Clock</a>
          <a href="/Portfolio/Calculator" >Calculator</a>
          <a href="/Portfolio/Login" >Login</a>
        </div>
      </div>
    </Menu>
  );
}
//
//<a href="/Portfolio/UrlShrink" >URL Shrink</a>