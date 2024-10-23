//
import { Container } from './styles';
import { FaGithub, FaLinkedin, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa'
//
export function Footer() {

  const linkStyles = { 
    color: "#f1dac4",
    fontSize: "2.5rem",
  }

  return (
    <Container>
      <div className='textEnding'>
        Don't forget to check the links!<br></br>
        by <strong>Thales Fornazari</strong>
      </div>
      <div className='social'>
        <a href="">my Resume!</a>
        <a href="https://github.com/thalfor" target='_blank'><FaGithub style={linkStyles} /></a>
        <a href="https://www.linkedin.com/in/thalesfornazari/" target='_blank'><FaLinkedin style={linkStyles} /></a>
        <a href="https://www.instagram.com/_thalfor_/" target='_blank'><FaInstagramSquare style={linkStyles} /></a>
        <a href="https://www.youtube.com/thalfor" target='_blank'><FaYoutubeSquare style={linkStyles} /></a>
      </div>
    </Container>
  );
}
//