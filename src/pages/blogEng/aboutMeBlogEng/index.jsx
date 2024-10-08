//
import { Container } from './styles'
import { Link } from 'react-router-dom';
import colorblind from '../../../assets/colorblind.jpeg';
//
export function AboutMeBlogEng(){
  return(
    <Container>
      
      <h1>About me</h1>
      <p>Here's a bit more About Me</p>
      
      <p>
        So fun fact, i don't really know how to write an "About Me" page but i was told to grab the reader's attention at the first seconds... so... 
        well... i'm colorblind!<br /><br />

        <div className='colorblindMaster'>
          <img className='colorblind' src={colorblind} alt="" /><br />
          Do you see this? I dont =) <br />
          If you don't i got some news for you...<br /><br /><br />
        </div>

        Born in Brazil's countryside the one thing i always thought going to a big city like São Paulo to found a job a move on with my life 
        and i now that i'm here i kinda want to go back? hahaha the grass is always greener on the otherside i guess.<br /><br />

        Anyway let's start from the beginning of it all.. October 4th 1988.<br /><br />

        Born in the countryside has ups and downs, the same as everything in life i supose, the problem is that we almost never stop to see the good part
        and spend a lot of time chasing the dream, whatever that is.<br />
        So you image me, a nerdy guy who likes to read, to play games, music in general, growing up in a city that had no book stores, like one place that
        sold gaming stuff, and very little access to different kinds of music. Marvelous.<br />
        Talking like this you may think i hated there, well you're not entirely wrong, however i loved the people. Some at least.<br /><br />

        One of my first memories was a bithday party where the theme was RAMBO, oh yeah. I don't remember much of my childhood but i have this very specific 
        moment where i was crawling under my father's car at the garage and i really don't know why but that felt awesome! Why? well, RAMBO!!!<br /><br />

        I was born in Bauru and moved to another city when i was about 6 years old, the city is called Marília. Here i lived until i was 20 years old.<br />
        At the time i was in Marília my passion for games and music bursted in me.
        I remember when i was introduced to Metallica! S&M album, it was something absolutely insane. This "new" music for me was what was going to define my
        hole personality during my young ages. Long hair and everything, really.<br />
        <img src="" alt="" />
        See?<br /><br />

        With games was the same thing, i normaly say that i have two main core memories about gaming. Zelda Ocarina of Time and Pokemon Blue.<br />
        <img src="" alt="" />
        This is how much i love these games.<br />
        In Zelda OoT the feeling when you leave Kokiri Forest for the first time and you see the phenomenal huge map in front of you, honestly i can't describe the
        feeling.<br />
        Pokemon was a bit different feeling, but i remember the first time i played was with an emulator and we shared games using floppy discs, oh yeah.
        The first time playing i remember when Squirtle learned Water Gun and a friend of mine said "bro, it's like 3 drops of water and you'll beat everything!", 
        AWESOME! Honestly it's awesome hahahhaa.<br />
        Needless to say that this also shaped my hole personality along with Metallica.<br /><br />
      </p>
      <Link className='links' to="../BlogMainEng/">
        Back to Blog
      </Link>
    </Container>
  );
}
//