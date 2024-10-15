//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsWebsiteEng(){

  const codeString01 = `npm install slick-carousel react-slick`;
  const codeString011 = `import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
`;

  const codeString02 = `const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0rem",
  slidesToShow: 3,
  speed: 500
};
`;
  const codeString03 = `<Slider {...settings}>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
  <div>5</div>
</Slider>`;
  const codeString04 = `npm install react-syntax-highlighter`;
  const codeString0401 = `import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
`;

  const codeString05 = `const codeString02 = \`const settings = {
className: "center",
centerMode: true,
infinite: true,
centerPadding: "0rem",
slidesToShow: 3,
speed: 500};
\`;`;
  const codeString06 = `<SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark}  wrapLines={true} language="jsx">
  {codeString06}
</SyntaxHighlighter>
`;
  
  return(
    <div>
    <MenuProject />
    <Container>
      <h1>This website</h1>

      <p>
        Let's talk about how the website was created. But first let me show you what was used: <br />
        - React <br />
        - Vite <br />
        - NodeJs <br /> <br />

        I also have this dependencies installed: <br />
        - react-dom <br />
        - react-router-dom <br />
        - styled-components <br />
        - react-icons <br />
        - slick-carousel <br />
        - react-slick <br />
        - react-syntax-highlighter <br /><br />

        Most of my website it's quite simple using flex or grid or both to arrange the content, you can see at "About Me", "Blog", "Hobbies" pages. 
        Also using the router-dom to make it's navigation wich is quite normal for a react project. 
        So i won't be talking about this here, i'll focus on what's somewhat different. <br /><br /><br />

        <strong>The Carousel:</strong> <br /><br />
        Let's begin at "Career" page. There you can see a carousel with my Professional Experience in each card. This was built using:<br />
        - slick-carousel <br />
        - react-slick <br />
        To make it work was a little challenging for I haven't realized that this dependency uses Flex components and i was trying to make it work also using it. 
        And let me say, the beginning was pure chaos, imagine using flex with another thing using it as well, trust me, CHAOS. <br />
        However as soon as i removed what i did the dependency worked just fine and i was able to make it work.<br />
        At my JSX file I had to use a quite simple code to define what type of carousel i wanted as long as how many cards i was going to show. <br />
        So to install it:<br /><br />

      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
        {codeString01}
      </SyntaxHighlighter>
      </div>
      <br /><br />

      To make it work at you JSX file you have to create the settings and use it into the return, you can do that directly into the return or you can create a const
      with it, I created a const.<br />
      About the settings I defined what type of carousel it would be, if it's an infinity scroll, how many slides, the speed: <br /><br />

      Import:<br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
        {codeString011}
      </SyntaxHighlighter>
      </div>
      <br />

      Const:<br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
        {codeString02}
      </SyntaxHighlighter>
      </div>
      <br />

      Return:<br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
        {codeString03}
      </SyntaxHighlighter>
      </div>
      <br /><br />

      It's important to notice that there are many many other types of carousel, you can find it right here at 
      their <a href="https://react-slick.neostack.com/" target='_blank'><strong>website</strong></a>.<br /><br /><br />
        
      <strong>Code Blocks:</strong><br /><br />

      To make the code blocks that you're seeing here i used:<br />
      - react-syntax-highlighter<br />
      This dependency allow me to build with many options the block code that i want to display including the theme, but the theme you have to decide when you 
      import it. Here we also can build everything into the return or we can also create consts that are going to be used in the return.<br />
      First install and import it:<br /><br />

      Install:<br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
        {codeString04}
      </SyntaxHighlighter>
      </div>
      <br />

      Import:<br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="javascript">
        {codeString0401}
      </SyntaxHighlighter>
      </div>
      <br /><br />

      Here's the example const used above, a const and the return:<br /><br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
        {codeString05}
      </SyntaxHighlighter>
      </div><br />
      <div className='codeblock01'>
      <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
        {codeString06}
      </SyntaxHighlighter>
      </div><br /><br /><br />

      I hope you've enjoyed the reading!

      </p>


    </Container>
    </div>
  );
}
//