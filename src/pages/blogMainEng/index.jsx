//
import { Container } from './styles';
import { Link } from 'react-router-dom';
import professional from '../../assets/professional.jpg'
import meBlogAboutMe from '../../assets/meBlogAboutMe.jpg'
//
export function BlogMainEng(){
  return(
    <Container>
      <h1>My Blog</h1>
      <p>
        Hello and welcome to my blog! <br />
        I'll be writting about a lot of things, personal, studies, games, everything! Feel free to check my posts!
      </p>
      <div className='postsMaster'>
        <Link className='links' to="../Blog/AboutMe">
          <div className='post'>
            <img src={meBlogAboutMe} alt="" />
            Here's a bit more about me!
            <div className='datePost'>08/10/2024</div>
          </div>
        </Link>
        <Link className='links' to="../Blog/Career">
          <div className='post'>
            <img src={professional} alt="" />
            Here's a bit more about my professional experience!
            <div className='datePost'>08/10/2024</div>
          </div>
        </Link>
      </div>
    </Container>
  );
}
//
/*
        <Link className='links' to="../BlogMainEng/pantanalBlogEng">
          <div className='post'>
            <img src={gaming64} alt="" />
            What i learned of my trips to Pantanal!
            <div className='datePost'>08/10/2024</div>
          </div>
        </Link>
        <Link className='links' to="../BlogMainEng/pokemonPainBlogEng">
          <div className='post'>
            <img src={gaming64} alt="" />
            Let's talk about some Pokemon and what it's all about!
            <div className='datePost'>08/10/2024</div>
          </div>
        </Link>
*/
//