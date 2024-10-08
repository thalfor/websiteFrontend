//
import { Container } from './styles';
import { Link } from 'react-router-dom';
import gaming64 from '../../assets/gamingN64.jpg'
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
        <Link className='links' to="../BlogMainEng/aboutMeBlogEng">
          <div className='post'>
            <img src={gaming64} alt="" />
            Here's a bit more me!
            <div className='datePost'>08/10/2024</div>
          </div>
        </Link>
        <Link className='links' to="../BlogMainEng/ProfessionalExpBlogEng">
          <div className='post'>
            <img src={gaming64} alt="" />
            Here's a bit more about my professional experience!
            <div className='datePost'>08/10/2024</div>
          </div>
        </Link>
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
      </div>
    </Container>
  );
}
//