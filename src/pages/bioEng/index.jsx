//
import { Container } from './styles';
import mapa from './../../assets/mapa.jpg'
import me from './../../assets/me.jpg'
import dog from './../../assets/dog.jpg'
//
export function BioEng(){
  return(
    <Container>
      <h1>About Me</h1>
      <p>
        Hey it's a me!
      </p>
      <div className='master'>
        <div className='bio'>
          A colorblind guy just trying to better each time. <br />
          Born in Bauru but grew in Marília, São Paulo's countryside, and now living at São Paulo for over a decade. <br />
          Once a nerd always a nerd! Passionate about learning, data-driven style, from teacher, financial analyst, team leader, dog dad, happy socks enthusiast, 
          and now getting into Backend Develping! 
        </div>
      </div>
      <div className='images'>
        <img src={mapa} alt="" /><br />
        <img src={me} alt="" />
        <img src={dog} alt="" />
      </div>

      
    </Container>
  );
}
//