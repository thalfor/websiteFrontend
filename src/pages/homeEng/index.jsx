//
import { Container } from './styles';
//
export function HomeEng(){
  return(
    <Container>
      <div className='presentation'>
        <h1>
          &quot;Yeah. Yeah, but your scientists were so preoccupied with whether they could that they didn&apos;t stop to think if they should.&quot;<br></br>
          <em>Ian Malcolm</em>.
        </h1>
        <img src="https://github.com/thalfor.png" alt="" />
      </div>
      <p>
        so anyway Welcome to my website!
      </p>
        <h1>What&apos;s going on now?</h1>
        <p>
          So i&apos;m currently studying a specific Backend Node.js course and honestly, it is what i really want to work with.<br />
          For now i&apos;ll keep with it along doing some personal projects to practice what i&apos;m learning!
        </p>
        <h1>Coming Soon:</h1>
      <div className='comingSoon'>
        <p>
          - URL Shrinker!<br />
          - QR Code generator!<br />
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