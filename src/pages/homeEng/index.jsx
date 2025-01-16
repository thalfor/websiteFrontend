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
          I just finished a Twitter (X) scraping tool using only javascript! You can check all the details&nbsp;<strong><a href="/Portfolio/TwitterScraping">here</a></strong>!
        </p>
        <h1>On Going:</h1>
      <div className='comingSoon'>
        <p>
          - At this moment I&apos;m creating a full Real Estate website for a potential client, with a backend integrated using services such as Cloudinary. <br />
          - Personal Finance app.<br />
          - A website that shows where are the places without electrical energy.<br />
          - A QR Code generator.<br />
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
