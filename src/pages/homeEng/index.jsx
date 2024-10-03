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
          Ian Malcolm.
        </h1>
        <img src="https://github.com/thalfor.png" alt="" />
      </Brand>
      <Paragraph>
        <p>
          Welcome to my website!
          Let me give you a brief explanation of what you'll find here.
        </p>
        <p>
          At the menu you'll find a few options, they are as follows: <br></br>
          - <em>Home:</em> &nbsp; it will bring you back to this page. <br></br>
          - <em>About Me:</em> &nbsp; get to know me a little bit more. <br></br>
          - <em>Blog:</em> &nbsp; i'll be writing about studies, thoughts, games, everything. <br></br>
          - <em>Hobbies:</em> &nbsp; what i like to do in my free time. <br></br>
          - <em>Professional Experience:</em> &nbsp; all of my professional trajectory. <br></br>
          - <em>Dev Projects:</em> &nbsp; my portfolio so far with detailed explanations. <br></br>
        </p>
        <p>
          Hope you enjoy it! 
        </p>
      </Paragraph>
    </Container>
  );
}
//