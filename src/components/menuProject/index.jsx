//
import { Menu } from './styles';
import menuIcon from '../../assets/icons8-menu.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom'
//
export function MenuProject() {
  return (
    <Menu>
      <div class="navSide">
        <Link to="/DevProjectsEng" style={{ textDecoration: 'none' }}>Portfolio</Link>
        <Link to="/DevProjectsEng/DevProjectsWebsiteEng" style={{ textDecoration: 'none' }}>This Website</Link>
        <Link to="/DevProjectsEng/DevProjectsAnalogClockEng" style={{ textDecoration: 'none' }}>Analog Clock</Link>
        <Link to="/DevProjectsEng/DevProjectsCalculatorEng" style={{ textDecoration: 'none' }}>Calculator</Link>
        <Link to="/DevProjectsEng/DevProjectsPostitEng" style={{ textDecoration: 'none' }}>Post It</Link>
        <Link to="/DevProjectsEng/DevProjectsLoginEng" style={{ textDecoration: 'none' }}>Login</Link>
        <Link to="/DevProjectsEng/DevProjectsUrlShrinkEng" style={{ textDecoration: 'none' }}>URL Shrink</Link>
      </div>
    </Menu>
  );
}
//