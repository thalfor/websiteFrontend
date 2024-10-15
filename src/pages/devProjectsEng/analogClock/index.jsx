//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
import { AnalogClock } from '../../../components/analogClock';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsAnalogClockEng(){

const codeString01 = `.clock {
  width: 30rem;
  height: 30rem;
  background-color: white;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
}

.clock .number {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotate(var(--rotation));
  font-size: 1.5rem;
  color: black;
}
  
.clock .number1 {--rotation: 30deg;}
.clock .number2 {--rotation: 60deg;}
.clock .number3 {--rotation: 90deg;}
.clock .number4 {--rotation: 120deg;}
.clock .number5 {--rotation: 150deg;}
.clock .number6 {--rotation: 180deg;}
.clock .number7 {--rotation: 210deg;}
.clock .number8 {--rotation: 240deg;}
.clock .number9 {--rotation: 270deg;}
.clock .number10 {--rotation: 300deg;}
.clock .number11 {--rotation: 330deg;}`;

const codeString02 = `<div class="number number1">1</div>
<div class="number number2">2</div>
<div class="number number3">3</div>
<div class="number number4">4</div>
<div class="number number5">5</div>
<div class="number number6">6</div>
<div class="number number7">7</div>
<div class="number number8">8</div>
<div class="number number9">9</div>
<div class="number number10">10</div>
<div class="number number11">11</div>
<div class="number number12">12</div>`;

const codeString03 = `const [secondsDeg, setSecondsDeg] = useState(0);
const [minutesDeg, setMinuteDeg] = useState(0);
const [hoursDeg, setHoursDeg] = useState(0);

useEffect(() => {
  const interval = setInterval(updateTime, 1000);
  return () => clearInterval(interval);
}, []);

const updateTime = () => {
  const date = new Date();
  const secondsToDeg = (date.getSeconds() / 60) * 360;
  const minutesToDeg = (date.getMinutes() / 60) * 360;
  const hoursToDeg = ((date.getHours() % 12) / 12) * 360 + (minutesToDeg / 12);

  setSecondsDeg(secondsToDeg);
  setMinuteDeg(minutesToDeg);
  setHoursDeg(hoursToDeg);
}`;

const codeString04 = `<div 
  id="data-hour-hand"
  class="hand hour" 
  style={{transform: \`rotate(\${hoursDeg}deg)\`,}}
></div>
<div 
  id="data-minute-hand"
  class="hand minute"
  style={{transform: \`rotate(\${minutesDeg}deg)\`,}}
></div>
<div 
  id="data-second-hand"
  class="hand second"
  style={{transform: \`rotate(\${secondsDeg}deg)\`,}}
></div>`;

  return(
    <div>
      <MenuProject />
      <Container>
        <h1>Analog Clock</h1><br />
        <AnalogClock />
        <p>
          So I had to re-do this project.<br />
          At my <a href="https://github.com/thalfor/JS_analogClock/" target='_blank'><strong>github</strong></a> page I have this project but not using React. 
          There I did a while ago when I haven't sutdyied React so it has a HTML, JS, CSS file.<br />
          However here since I'm using react i had to recreate the JS logic into my JSX file. The analog clock was created as a component so i can use it anywhere on
          this website.<br /><br />

          The logic starts when building the clock and it's numbers. For the numbers I found two options to do so:<br />
          1 - Go into the inspect at your browser and find the best position for them. Copy each into the style file and you're done.<br />
          2 - Make it by setting a variable with degrees that correspond each position into a circle.<br /><br />
          I went for the second choice, here's the clock building and the numbers position:<br />
          <div className='codeblock01'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
              {codeString01}
            </SyntaxHighlighter>
          </div>
          <br />

          If you notice there's no number 12 and that's because it's position is already set to the top.<br />
          This alone already set the numbers around the clock. <br /><br />

          Also in my JSX file i had a div for each number:<br />
          <div className='codeblock01'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
              {codeString02}
            </SyntaxHighlighter>
          </div>
          <br /><br />

          Now let me show you the JSX logic.<br />
          To make the logic I used useEffect and useState from React. Here's the logic created:<br />
          <div className='codeblock01'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
              {codeString03}
            </SyntaxHighlighter>
          </div>
          <br />

          And for each (seconds, minutes, hours):<br />
          <div className='codeblock01'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
              {codeString04}
            </SyntaxHighlighter>
          </div>
          <br />


          The useEffect and useState logic makes the function update each second. So i had to create the logic of how many degrees each of the clock's pointer would have. <br />
          Seconds and Minutes are quite forward, not to much of a secret there. The hours is a little bit tricky and it has the minutes component as well added.<br /><br />
          "Fun" fact here, if you google or youtube "React Analog Clock" you'll find a lot of examples that are WRONG! Not because the logic is actually wrong 
          but because it's incomplete! What happens is that some people just didn't use a complete logic for the Hours hand, so it stays fixed every hour.<br /><br />
          Here are some wrong examples:<br />
          <a href="https://www.youtube.com/watch?v=KnixxKoBnFA" target='_blank'><strong>Example 1</strong></a><br />
          <a href="https://codesandbox.io/p/sandbox/analog-clock-using-react-idkpz" target='_blank'><strong>Example 2</strong></a><br />
          <a href="https://medium.com/@guyrashko/how-to-create-an-analog-clock-using-react-2e2e382367c3" target='_blank'><strong>Example 3</strong></a><br /><br />

          I really don't know why is that for usually the one thing that is missing is the minutes component / 12 added to the hours. <br />
          Maybe a copy paste without checking? Maybe that's the way they wanted to build it? I don't know, but it is an odd thing to happen.<br /><br />

          I hope you have enjoyed the reading!         


        </p>
      </Container>
      </div>
  );
}
//