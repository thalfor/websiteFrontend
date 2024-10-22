//
import { Container } from './styles'
import { Link } from 'react-router-dom';
import colorblind from '../../../assets/colorblind.jpeg';
import meBaby from '../../../assets/meBaby.jpg';
import music from '../../../assets/music.jpg';
import tattoo from '../../../assets/tattoo.jpg';
import taiko01 from '../../../assets/taiko01.jpg';
import taiko02 from '../../../assets/taiko02.jpg';
import taiko03 from '../../../assets/taiko03.jpg';
import taiko04 from '../../../assets/taiko04.jpg';
import taiko05 from '../../../assets/taiko05.jpg';
import university01 from '../../../assets/university01.jpg';
import university02 from '../../../assets/university02.jpg';
import university03 from '../../../assets/university03.jpg';
import saopaulo01 from '../../../assets/saopaulo01.jpg';
import saopaulo02 from '../../../assets/saopaulo02.jpg';
import saopaulo03 from '../../../assets/saopaulo03.jpg';
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
        and i now that i'm here i kinda miss it? hahaha the grass is always greener on the otherside i guess.<br /><br />

        Anyway let's start from the beginning of it all.. October 4th 1988.<br /><br />
        <div className='babyMeMaster'>
          <img className='babyMe' src={meBaby} alt="" /><br />
          Hecking gourgeous me<br /><br /><br />
        </div>

        Born in the countryside has ups and downs, the same as everything in life i supose, the problem is that we almost never stop to see the good part
        and spend a lot of time chasing the dream, whatever that is.<br />
        So you imagine me, a nerdy guy who likes to read, to play games, music in general, growing up in a city that had no book stores, like, one place that
        sold gaming stuff, and very little access to different kinds of music. Marvelous.<br />
        Talking like this you may think i hated there, well you're not entirely wrong, however i loved the people. Some at least.<br /><br />

        One of my first memories was a birthday party where the theme was RAMBO, oh yeah. I don't remember much of my childhood but i have this very specific 
        moment where i was crawling under my father's car at the garage and i really don't know why but that felt awesome! Why? well, RAMBO!!!<br /><br />

        I was born in Bauru and moved to another city when i was about 6 years old, the city is called Marília. There i lived until i was 20 years old.<br />
        At the time i was in Marília my passion for games and music bursted in me.
        I remember when i was introduced to Metallica! S&M album, it was something absolutely insane. This "new" music for me was what was going to define my
        hole personality during my young ages. Long hair and everything, really.<br /><br />
        
        <div className='musicMaster'>
          <img className='music' src={music} alt="" /><br />
          See?<br /><br />
        </div>

        With games was the same thing, i normaly say that i have two main core memories about gaming. Zelda Ocarina of Time and Pokemon Blue.<br /><br />
        
        <div className='tattooMaster'>
          <img className='tattoo' src={tattoo} alt="" /><br />
          This is how much i love these games.<br /><br />
        </div>

        In Zelda OoT the feeling when you leave Kokiri Forest for the first time and you see the phenomenal huge map in front of you, honestly i can't describe the
        feeling.<br />
        Pokemon was a bit different feeling, but i remember the first time i played was with an emulator and we shared games using floppy discs, oh yeah.
        I remember when Squirtle learned Water Gun and a friend of mine said "bro, it's like 3 drops of water and you'll beat everything!", 
        AWESOME! Honestly it's awesome hahahha.<br />
        Needless to say that this also shapped my hole personality along with Metallica.<br /><br />

        Let's skip forward in time a little.<br />
        Is it Taiko time? It's Taiko time!<br /><br />

        So yeah, Taiko! <br />
        I did practice Taiko and it got me deep dived into the japanese geek culture, something that I carry along untill today. <br />
        I think what I can say about is that the team work was something that blew my mind. It was like a rock band but with 15+ people! To get everyone together
        in time playing and giving 100% of ourselves is an experience that I'll never forget. <br />
        I remember when the leaders (the ones who teach us) told us which instruments we were set to play, mine was the Odaiko, the large one that is usually
        set horizontally at some sort of support. <br />
        We usually perform at festivals that had main focus the japanese culture, such as the Japan Fest at Marília, Bastos Festival at Bastos. But we also performed
        at events of anykind, at universities, schools. We were ready to give our best anytime and anywhere! <br />
        At that time I met some of my greatest friends and we still are untill today! <br /><br />

        <div className='taikoMaster'>
          <div className='taikoImages'>
            <img className='taiko' src={taiko01} alt="" />
            <img className='taiko' src={taiko02} alt="" />
            <img className='taiko' src={taiko03} alt="" />
            <img className='taiko' src={taiko04} alt="" />
            <img className='taiko' src={taiko05} alt="" />
          </div>
          <br />Taikoooooooo! <br /><br />
        </div>

        Let's go forward some more! University!!!<br />
        I got into the uni located in Campinas, University of Campinas, a.k.a. UNICAMP! There i started the Bachelor at Physics course and i understood why it was kinda easy
        to get in.. It's because is insanely hard to get out holy mother of Darwin!<br />
        Talk about wtf subjects and you can't simply imagine things and the exams and the math, OH BOY THE MATH! Saying like that you may think that i hated there, and 
        you are right! hahaha just kidding, i loved it! But yeah super hard.<br />
        To get to deep dive into nature's secrets, analysing the particles, experimenting, it's honestly great! I also was part of the Physics Show, 
        creating and performing! Something that i simply loved!<br />
        There i lived with some friends at a house that we called "Lara's Republic"! Great time, even greater friends, an amazing experience!<br /><br />

        <div className='universityMaster'>
          <div className='universityImages'>
            <img className='university' src={university01} alt="" />
            <img className='university' src={university03} alt="" />
            <img className='university' src={university02} alt="" />
          </div>
          <br />University!<br /><br />
        </div>

        So i moved to São Paulo to start my professional life, where I am untill today after a little more than 10 years!<br />

        Here in São Paulo i finished my studies at University of São Paulo (USP) and focused on my career. But still made amazing friends at work, you know, pain brings
        people together! hahahah just kidding, i think i'm trully lucky to always be part of amazing teams with amazing people! <br />
        São Paulo is an amazing city with a lot of opportunities! Want to get pizza 10AM? Done! Theater of anykind? Done! All sorts of foods from all around the world
        at any time? Done! This kinda of lifestyle is something that i really wanted, you actually get to be yourself. <br />
        Here is where i got my two marvelous, great, amazing, cute, loved dogs! Baco, the gray, and Merlot, the dark! Needless to say that i love them hahahah<br /><br />

        <div className='saopauloMaster'>
          <div className='saopauloImages'>
            <img className='saopaulo' src={saopaulo01} alt="" />
            <img className='saopaulo' src={saopaulo02} alt="" />
            <img className='saopaulo' src={saopaulo03} alt="" />
          </div>
          <br />University!<br /><br />
        </div>



        I think this post is long enough already, but what i wanted to describe are the some of the core things that shaped me who i am today. <br />
        Trully hope that you enjoyed the reading for i sure did enjoyed writing it!<br /><br />

        See ya!

      </p>


      <Link className='links' to="../Blog/">
        Back to Blog
      </Link>
    </Container>
  );
}
//