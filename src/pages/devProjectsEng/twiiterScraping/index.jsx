//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsTwitterScraping(){

const codeString00 = ``;

  const codeString01 = ``;

  const codeString02 = ``;

  const codeString03 = ``;

  return(
    <div>
    <MenuProject />
    <Container>
      <h1>Twitter (X) Scraping</h1>
      <p>
        So i wanted to get some tweets from X (former Twitter) to make a database for sentimental analysis.
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString00}
          </SyntaxHighlighter>
        </div>
        <br /><br />


        <br /><br /><br />
      </p>
    </Container>
    </div>
  );
}
//