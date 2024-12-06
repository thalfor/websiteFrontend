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
          So i&apos;m currently developing some backend projects with Node.js using Fastify to keep up on learning and practicing since it is what i really want to work with.<br />
          Some are done, such as a URL Shrinker, and you can check it on my Portfolio!
        </p>
        <h1>On Going:</h1>
      <div className='comingSoon'>
        <p>
          - At this moment I&apos;m creating a full Real Estate website for a potential client, with a backend integrated using services such as Cloudinary. <br />
          - Personal Finance app.
          - A website that shows where are the places without electrical energy.
          - QR Code generator.<br />
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
