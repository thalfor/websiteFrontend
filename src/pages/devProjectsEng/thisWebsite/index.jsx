//
import { Container } from './styles';
import { Navbar } from '../../../components/navBar';
//
export function DevProjectsWebsiteEng(){
  return(
    <Container>
      <Navbar />
      <h1>This Website!</h1>
      <p>
        This website was built using React!
        
        Appearance:
        The main focus of my website appearance is to feel like a documentation page, very minimalistic e objective. examples:

        https://nodejs.org/docs/latest/api/embedding.html
        https://knexjs.org/guide/
        https://react.dev/reference/react
        https://jestjs.io/docs/getting-started


        Structure
        The structure is as follows:

        HomePage: The HomePage have a brief description of what to expect when you visit this website. It also have the menu option.

        Menu: 
          - About Me: brief description of my life.
          - Hobbies: brief description of my hobbies.
          - Professional Experience: brief description of my Professional Experience. For more check my blog or get in touch with me.
          - Blog: i'll post any kind of content here, stories about my life, games, music, studies.
          - Contact: here you'll see my contact info.
          - Dev Projects Here we'll have the projects selected as my portfolio, they are for now:
              analogClock.
              calculator.
              postit.
              login.
              urlShrinker.

        
      </p>
    </Container>
  );
}
//