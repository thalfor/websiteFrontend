//
import { Container } from './styles';
import jurassicPark from '../../assets/jurassicPark.jpg';
import gaming from '../../assets/gamingN64.jpg';
import music from '../../assets/music.jpg';
import travel from '../../assets/travelling.jpg';
import fencing from '../../assets/fencing.jpg';
import study from '../../assets/studying.jpg';
import read from '../../assets/read.jpg';
//
export function HobbiesEng(){
  return(
    <Container>

      <div className='title'>
        <h1>Hello there!</h1>
        <p>Here, get to know me a bit more!</p>
      </div>

      <img src="" alt="" />

      <div className='masterHobbyBox'>

        <div className='hobbyBox'>
          <p><strong>Gaming!</strong></p>
          <p>Since forever a gamer and today i kinda play my snes more than my ps5.</p>
          <img src={gaming} alt="" />
        </div>

        <div className='hobbyBox'>
          <p><strong>Music!</strong></p>
          <p>Started studying as hobby at 7 years old. Well, almost 30 years latter I still play badly.</p>
          <img src={music} alt="" />
        </div>

        <div className='hobbyBox'>
          <p><strong>Movies!</strong></p>
          <p>Global Law idea: every top tier movie list should start with Jurassic Park.</p>
          <img src={jurassicPark} alt="" />
        </div>

        <div className='hobbyBox'>
          <p><strong>Travelling!</strong></p>
          <p>Come on, who doesn't like it? And why not going out more? We all got bills to pay baby.</p>
          <img src={travel} alt="" />
        </div>

        <div className='hobbyBox'>
          <p><strong>Reading!</strong></p>
          <p>100% passionate by reading! Wait... manga counts right?</p>
          <img src={read} alt="" />
        </div>

        <div className='hobbyBox'>
          <p><strong>Sports!</strong></p>
          <p>GO SPORTS!!!! Currently on fencing! A dream since i was a humanoid youngling.</p>
          <img src={fencing} alt="" />
        </div>

        <div className='hobbyBox'>
          <p><strong>Studying!</strong></p>
          <p>What can i say, once a nerd always a nerd.</p>
          <img src={study} alt="" />
        </div>
        
      </div>
    </Container>
  );
}
//
/*

      <h1>My Hobbies</h1>
      <p>
        Hello there! Let's talk about my personal hobbies here, hope you have a good reading!<br></br><br></br>
        Music!<br></br>
        Music has been part of my life since i was 7 years old, i lived in Marília and my parents enrolled me into acoustic guitar classes which 
        i practiced for maybe one year.<br></br>
        After acoustic guitar i started playing keyboards where i stayed for a few years. Then i realized that i really really really enjoyed playing and 
        learning more about music theory. So i started stuudying eletric guitar, bass, violin, piano. I never stopped learning and practicing, since i started with 7 
        and today i'm 36.. well... 29 years of it!<br></br>
        The thing i like the most about music is that it teachs you a very important lesson: it takes time and that's okay.<br></br>
        We see a world where people are living at a faster pace than ever, and that can cause a lot of stress, anxiety, mental illness related to forgetting
        to take your time, go on your pace, and music can do wonders to prevent this type of behavior.<br></br><br></br>
        Games!<br></br>
        Just as music games have been part of my life since forever! I remember the first console that i got was a Master System with Sonic on it's memory. The best part
        of it? I still got the same console here and working!<br></br>
        I not only love to play but i also like to collect consoles. Today i have:<br></br>
        - 1 Master System.<br></br>
        - 1 NES.<br></br>
        - 1 Super Nintendo, american edition.<br></br>
        - 8 Nintendo 64.<br></br>
        - 2 Game Cubes.<br></br>
        - 1 Nintendo WiiU.<br></br>
        - 2 Nintendo Switch.<br></br>
        - 1 GameBoy.<br></br>
        - 1 GameBoy Color.<br></br>
        - 1 GameBoy Advance SP.<br></br>
        - 1 Nintendo 3ds.<br></br>
        - 1 PSP.<br></br>
        - 1 PS5.<br></br>
        And if you are wondering how do i play the retro consoles... well, i have and old tv here as well!<br></br>
        Games always fascinated me, you get to dive into wonderful experiences, get to live other lifes, get to even know more about yourself looking at your own 
        in game choices and how you take the lead on each story.<br></br>
        I think that the same with music, games can help with modern problems for some of it stories can teach us a lot. One game that i always recommend people is 
        Gris. An indie masterpiece that deals with grief and it's stages. Simply wonderful and touching.<br></br><br></br>
        Travelling!<br></br>
        What can i say about this? Who the hell doesn't like travelling come on hahahah<br></br>
        Since i was about 4 or 5 years old my dad took me on a fishing trip to Pantanal, an brazilian ecosystem extremely rich on it's fauna and flora for it's a 
        junction of around 3 or 4 different ecosystems! So the love for nature and travelling simply came by me.<br></br>
        Also about travelling i love going abroad, getting to know different cultures is a wonderful experience! I visited already: <br></br>
        - Ukraine: it was before the war i stayed at Mariupol and it was a marvelous city. <br></br>
        - Mauritius: located at the Indic Ocean it is a piece of heaven on earth.<br></br>
        - Argentina: talk about tango and barbecue, god it's amazing! 100% recommend it!<br></br>
        - Chile: if you like fine wines and visiting marvelous wineries that's the place for you!<br></br>
        - France: Paris is amazing, went there twice and could go a million more.<br></br>
        - United Kingdom: visited London, NewCastle, and a bit of Edinburgh. The scoth, for those who like it, just go there.<br></br>
        - Germany: fine country! Very organized, clean, safe, super cool to get to know!<br></br>
        - Switzerland: organized, beautiful, delicious foods, AMAZING! However it's quite expensive hahaha<br></br>
        I'll write mor details about some stories of my trips at my blog, feel free to read it.<br></br><br></br><br></br>
        I think this sums up my personal favorite hobbies, thanks for the reading!
      </p>
*/