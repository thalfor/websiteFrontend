//
import { Container, Menu, Content, Project } from './styles';
import { Navbar } from '../../../components/navBar';
import { Link } from 'react-router-dom';
//
export function DevProjectsAnalogClockEng(){

  setInterval(setClock, 1000);

  const hourHand = document.querySelector("[data-hour-hand]");
  const minuteHand = document.querySelector("[data-minute-hand]");
  const secondHand = document.querySelector("[data-second-hand]");
  
  function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
  }

  function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
  }

  setClock();

  return(
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
          <h1>Analog Clock</h1>
          <p>
          The code is divided in 2 parts:<br></br>

          JavaScript:<br></br>
          To get the current time there's no much of a challenge because just by using .getSeconds, .getMinutes, .getHours we have the final goal. 
          However it's important to realize that since the clock is round we need to make sure the pointers move acording to it's time and we do that 
          by diving the seconds, minutes, hours by it's clock ratio (60,60,12) having our full cicle of 360.<br></br>
          CSS:<br></br>
          With the true challenge being the CSS due to the fact it is a round analogic clock and not just simply printing the time on screen.<br></br>
          This is the real tricky part, we need:<br></br>
          to build a circle.<br></br>
          to populate this circle with numbers (1-12).<br></br>
          to fit the numbers within this circle.<br></br>
          to build the pointers (sec, min, hours).<br></br>
          to build the dot at the middle of the clock where the pointers will be fixed.<br></br>

          Conclusion<br></br>
          To implement this type of code one must have not only a good understanding of CSS but also a good understanding of it's logic since we 
          needed to partition the numbers and pointers in HTML for later in JS and CSS get the clock done.<br></br>
          </p>
          <Project>
            <div class="clock">
              <div class="hand hour" data-hour-hand></div>
              <div class="hand minute" data-minute-hand></div>
              <div class="hand second" data-second-hand></div>
              <div class="number number1">1</div>
              <div class="number number2">2</div>
              <div class="number number3">3</div>
              <div class="number number4">4</div>
              <div class="number number5">5</div>
              <div class="number number6">6</div>
              <div class="number number7">7</div>
              <div class="number number8">8</div>
              <div class="number number9">9</div>
              <div class="number number10">10</div>
              <div class="number number11">11</div>
              <div class="number number12">12</div>
            </div>
          </Project>
        </Content>
      </div>
    </Container>
  );
}
//