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
        <h1>Coming Soon:</h1>
      <div className='comingSoon'>
        <p>
          - URL Shrinker on my Portfolio!<br />
          - QR Code generator on my Portfolio!<br />
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