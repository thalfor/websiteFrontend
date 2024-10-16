//
import { Container} from './styles';
import { MenuProject } from '../../../components/menuProject';
import { Calculator } from '../../../components/calculator';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsCalculatorEng(){

  const codeString01 = `const Button = ({ pressedButton, handleClick }) => {
  return(
    <Container>
    <button
      className="wrapper"
      onClick={() => handleClick(pressedButton)}
    >
      {pressedButton}
    </button>
    </Container>
  );
}`;

const codeString02 = `const Input = ({ current, latest }) => {
  return (
    <Container>
      <div className="wrapper">
        <div className="latest">
          <h1>{latest}</h1>
        </div>

        <div className="current">
          <h3>{current}</h3>
        </div>
      </div>
    </Container>
  );
};`;

const codeString03 = `const [current, setCurrent] = useState("");
const [latest, setLatest] = useState("");

const intoCurrent = (newInput) => {
  setCurrent((current) => [...current, newInput]);
}

const calculateResult = () => {
  const input = current.join("");
  setLatest(math.evaluate(input));
};`;

const codeString04 = `const eraseNumber = () => {
  const input = current.slice(0,-1);
  setCurrent(input);
};

const resetInput = () => {
  setCurrent("");
  setLatest("");
};`;

const codeString05 = `<Button pressedButton="AC" handleClick={resetInput}/>
<Button pressedButton="DEL" handleClick={eraseNumber} />
<Button pressedButton="÷" handleClick={intoCurrent} />
<Button pressedButton="*" handleClick={intoCurrent} />`;

  return(
    <div>
    <MenuProject />
    <Container>
        <h1>Calculator</h1><br />
      <div className='calculator'>
        <Calculator />
      </div>
      <div className='content'>
        <p>
          So I had to re-do this project. And trust me, trully re-do.<br />
          If you haven't checked you can see my <a href="https://github.com/thalfor/JS_calculator" target='_blank'><strong>github calculator project</strong></a> and 
          you'll see that this one is quite different, the reason? My oldest one (github) is not using React, and this one is!<br /><br />

          To make this calculator i had to create Buttons and Input components that were not required in my oldest one. But let me show you some logic first.<br /><br /><br />

          <strong>Button and Input</strong><br /><br />

          My button component was created so it can recieve the input information, here:<br />
          <div className='codeblock'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
              {codeString01}
            </SyntaxHighlighter>
          </div>
          <br />

          And my input component was created to show the current and the last result:<br />
          <div className='codeblock'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
              {codeString02}
            </SyntaxHighlighter>
          </div>
          <br />

          All of this was used in my main JSX for this page. Now let's move on to it!<br /><br /><br />

          <strong>Calculator</strong><br /><br />

          To make this happen i used the useState react component to set values so I could make operations with it.<br />
          So, the calculation could be done by 2 different ways, or I did a switch case (such as the github project) or I could use a new lib to do it. I chose the lib!<br />
          It's called "mathjs" and the way that it works is this: you give it a string with operators and it will calculate for you. So in my logic i did:<br />
          <div className='codeblock'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
              {codeString03}
            </SyntaxHighlighter>
          </div>
          <br />

          In other words, i just did a long string and used the "math" component to calculate it. Quite simple and different from what i already have done.<br /><br />

          As you may notice the calculator also have "AC" and "DEL" buttons, the AC clears the inputs and results and DEL delete the last input that you did. Here's how:<br />

          <div className='codeblock'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
              {codeString04}
            </SyntaxHighlighter>
          </div>
          DEL is "eraseNumber" and AC is "resetInput"<br /><br />

          With that the one thing missing is the main JSX html organization, here's an exemple:<br />
          <div className='codeblock'>
            <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
              {codeString05}
            </SyntaxHighlighter>
          </div>
          <br /><br /><br />

          With that I was able to re-write and existing code and learn new methods. I hope you have enjoyed the reading!




        
        </p>
      </div>
    </Container>
    </div>
  );
}
//