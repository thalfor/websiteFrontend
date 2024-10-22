//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
import { UrlShrinker } from '../../../components/urlShrinker';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsUrlShrinkEng(){

  const codeString01 = ``;

  return(
    <div>
    <MenuProject />
    <Container>
      <h1>Url Shrink</h1>
      <UrlShrinker />
      test
      <div className='codeblock'>
        <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
          {codeString01}
        </SyntaxHighlighter>
      </div>
      <br />
    </Container>
    </div>
  );
}
//