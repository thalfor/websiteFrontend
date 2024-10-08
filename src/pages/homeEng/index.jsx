//
import { Container } from './styles';
//
export function HomeEng(){
  return(
    <Container>
      <div className='presentation'>
        <h1>
          "Yeah. Yeah, but your scientists were so preoccupied with whether they could that they didn't stop to think if they should."<br></br>
          <em>Ian Malcolm</em>.
        </h1>
        <img src="https://github.com/thalfor.png" alt="" />
      </div>
      <p>
        so anyway Welcome to my website!
      </p>
      <div className='comingSoon'>
        <h1>Coming Soon:</h1>
        <p>
          - Projects in my Portfolio.
          - Complete About Me at my Blog.
          - Website fully functional with mobile devices.
        </p>
      </div>
    </Container>

  );
}
//
/*
    <Container>
      <Brand>
        <h1>
          "Yeah. Yeah, but your scientists were so preoccupied with whether they could that they didn't stop to think if they should."<br></br>
          <em>Ian Malcolm</em>.
        </h1>
        <img src="https://github.com/thalfor.png" alt="" />
      </Brand>
      <Paragraph>
        <p>
          so anyway Welcome to my website!
        </p>
      </Paragraph>
    </Container>
*/