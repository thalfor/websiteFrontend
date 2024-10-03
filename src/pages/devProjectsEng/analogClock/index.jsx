//
import { Container, Content } from './styles';
import { Navbar } from '../../../components/navBar';
import { MenuProject } from '../../../components/menuProject';
import { AnalogClock } from '../../../components/analogClock';
//
export function DevProjectsAnalogClockEng(){
  return(
    <div>
      <Navbar />
      <MenuProject />
      <Container>
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
        </Content>
      </Container>
      </div>
  );
}
//