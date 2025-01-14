//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import puppeteerExtra from '../../../assets/puppeteerExtra.jpg';
//
export function DevProjectsTwitterScraping(){

  const codeString00 = `const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());`;

  const codeString01 = `const url = 'https://x.com/i/flow/login'
const browser = await puppeteer.launch({ headless: true });
let page = await browser.newPage();
await page.goto(url);
await setTimeout(4000);`;

  const codeString02 = `await page.waitForSelector(\`xpath/.//input[@name='text']\`); 
const [inputLoginField] = await page.$$(\`xpath/.//input[@name='text']\`);
await inputLoginField.type(env.USERNAMELOGIN);
await page.keyboard.press('Enter');
await setTimeout(2000);`;

  const codeString03 = `$x(\`//div[@data-testid="tweetText"]\`)[0].childNodes[1].childNodes[0].wholeText`;
  
  const codeString04 = `const tweetElements = await page.$$(\`xpath/.//div[@data-testid='tweetText']\`);
for (let i = 0; i < tweetElements.length; i++) {
  const tweetElement = tweetElements[i];

  const tweetText = await page.evaluate(e => e.innerText, tweetElement);

  tweets.add(JSON.stringify({ text: tweetText, formattedTweetDate }));
}

await page.evaluate(() => {
  window.scrollBy(0, window.innerHeight);
});
await setTimeout(3000);
await page.evaluate(() => {
  window.scrollBy(0, window.innerHeight);
});
await setTimeout(3000);

i++;
console.log(\`loop number \${i}\`);

}

const tweetArray = [...tweets].map(tweet => JSON.parse(tweet));
fs.writeFileSync('tweets.json', JSON.stringify(tweetArray, null, 2), 'utf-8');

`;

  return(
    <div>
    <MenuProject />
    <Container>
      <h1>Twitter (X) Scraping</h1>
      <p>
        Since Elon Musk bought his way into X (former Twitter) getting information from it, such as tweets and its details, has become increasingly challenging without 
        resorting to its paid API.
        This shift added to my memories of a time when information access were easier, when we had many ways of mining Twitter inspired me to explore alternative 
        approaches to data mining and since I'm using JavaScript why not use it to do so.
        <br /><br />
        Let's start describing what is our main dependency here: <strong><a href="https://pptr.dev/" target='_blank'>Puppeteer</a></strong>.<br />
        Puppeteer is a dependency created in a way that you can navegate using chrome to any website that you want using its URL and the HTML's code of it! In a way 
        that makes it an incredible powerful tool. However there's a major issue to adress before anything.<br />
        This dependecy acts as a bot, so yes, it can get you banned from websites that detects those. The solution? Puppeteer itself.<br />
        Dependencies in the code with stealth activation:
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString00}
          </SyntaxHighlighter>
        </div>
        <br />
        This dependencies Extra and Stealth from puppeteer itself already fix this major issue making your created bot passing as a human.<br />
        To test i used this website <strong><a href="https://bot.sannysoft.com/" target='_blank'>https://bot.sannysoft.com/</a></strong>. It shows if you're acting 
        as a bot (red color) or as a human (green color). And that's where we can see the diference between using only puppeteer and puppeteer-extra with the steath 
        plugin.<br />
        Puppeteer Extra with the Steath plugin:<br />
        <img className='puppeteerExtraImg' src={puppeteerExtra} alt="" />
        <br />
        It has other tests that are way to many to put here, but yes, they're all green.<br /><br />

        With this issue solved let's dive into the code.<br /><br /><br />

        <strong>The Code itself</strong><br /><br />
        This project is open source and it is at my <strong><a href="https://github.com/thalfor/jsTwitterScraping" target='_blank'>Github Page</a></strong> for anyone 
        to access.<br /><br />

        Puppeteer is quite simple to understand, here's an example of what is the code to go to X's login page:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString01}
          </SyntaxHighlighter>
        </div>
        <br />
        What's happening here is that we define a page to start, in this case it's X login page, we await for the browser and set a timeout for it to load properly.<br />
        Interesting thing is the "headless: true" command. This is where you set if you want to see the browser or not, if you set it to FALSE you'll see the browser 
        and TRUE you won't. I honestly think its counter intuitive since FALSE you WILL see it and TRUE you WON'T but the statement "HEADLESS" is a negative so hahahaha. 
        I don't know why but i think this is quite funny hahaha.<br />
        So anyway this is how you access a page. Now let's dive into the logic.<br /><br />

        Once we're at the login page how to actually log in? This is how I did it:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString02}
          </SyntaxHighlighter>
        </div>
        <br />
        The command "waitForSelector" will check if the page's html code have this on it, so i wen't to the login page and saw that the input to the email is "name='text'" 
        and i put the code to wait for this block of code appear into the page's html.<br />
        Once it's there we do need to fill this input with our login information and here's where i found a second major issue: page.$$ or page.$x command. The good thing 
        is that the <strong><a href="https://pptr.dev/guides/page-interactions#waitforselector" target='_blank'>dependency documentation</a></strong> is updated!<br />
        I don't know what happens here but if you check on google or any other search tool (including ChatGPT) it will say for you to use the $x command for it, 
        however around january 2024 it <strong><a href="https://github.com/puppeteer/puppeteer/pull/11782" target='_blank'>deprecated</a></strong> and the code now is 
        page.$$ using the waitForSelector, before was waitForXpath. Honestly I don't know what happens here but again, all the places will give you the $x as the correct 
        answer and it's not. Just like the Analog Clock project it appears that a lot of you out there simply copy paste without checking, be careful people.<br />
        After that I gave it my login information to fill up the input. The username and password follow the same logic.<br /><br />

        Since the login was successful it's time to get the data! I wanted to test it getting the @markets (bloomberg's market page) data.<br /><br />

        So at the page that i want to get the data I checked what was the html code for the tweets, you can check this oppening chrome's console and typing:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString03}
          </SyntaxHighlighter>
        </div>
        <br />
        This will show the tweet text, this is how i got the puppeteer code correctly.<br />
        Now it was a matter of getting all the elements from it, getting the innerText property and putting at a JSON file.<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString04}
          </SyntaxHighlighter>
        </div>
        <br /><br />

        You can notice that i scrolled down the page twice to get it to upload more tweets, I went checking how many were the optimal by try and error method and found out 
        that two times is the best.<br /><br />

        Getting 1000 tweets took me around 30 minutes and i ended up with a 223kb JSON file.
        <br /><br /><br />


        If you go to the github you'll notice that i also get the date from the tweets as well to save into the JSON file, I didn't put it here on the description because 
        i wanted to focus on getting the data and not necessarily manipulating it.<br /><br />

        And this is how I created a Twitter Mining using only JavaScript! I trully hope that you enjoyed the reading for I sure did enjoyed creating it.






        <br /><br /><br />
      </p>
    </Container>
    </div>
  );
}
//