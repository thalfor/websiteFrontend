//
import { Brand, Paragraph, Container } from './styles';
import { Navbar } from '../../components/navBar';
//
export function HomeEng(){
  return(
    <Container>
      <Navbar />
      <Brand>
        <h1>
          "Yeah. Yeah, but your scientists were so preoccupied with whether they could that they didn't stop to think if they should."<br></br>
          <em>Ian Malcolm</em>.
        </h1>
        <img src="https://github.com/thalfor.png" alt="" />
      </Brand>
      <Paragraph>
        <p>
          Welcome to my website!
        </p>
      </Paragraph>
    </Container>
  );
}
//