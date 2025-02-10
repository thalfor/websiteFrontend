//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsFinancialData(){

  const codeString01 = `async function fetchBACENData(seriesCode, startDate, endDate) {
  const url = \`https://api.bcb.gov.br/dados/serie/bcdata.sgs.\${seriesCode}/dados?formato=json&dataInicial=\${startDate}&dataFinal=\${endDate}\`;
  const response = await axios.get(url);
  return response.data;
};`;

  const codeString02 = `const queryOptions = { period1: startPeriod, return: "object", };
const result = await yahooFinance.chart(symbol, queryOptions);`;

  const codeString03 = `for(elementTimeStamp of timestampArray){
  date = new Date(elementTimeStamp*1000); // *1000 to fix the timestamp from unix to javascript
  dateArray.push(date);
};

let finalObject = {};

finalObject.stockTicker = symbol;
finalObject.dates = dateArray;
finalObject.volume = result.indicators.quote[0].volume;
finalObject.open = result.indicators.quote[0].open;
finalObject.low = result.indicators.quote[0].low;
finalObject.high = result.indicators.quote[0].high;
finalObject.close = result.indicators.quote[0].close;`;


  return(
    <div>
    <MenuProject />
    <Container>
      <h1>Financial Data</h1>
      <p>
        This project is open source and you can check it <strong><a href="https://github.com/thalfor/jsFinancialDataFetch">here</a></strong>!<br /><br />
        For this project I worked in two parts:<br />
        - BACEN data: getting SELIC and IPCA.<br />
        - StockMarket data: getting all current stocks on B3 (Brazil's stock trading center) and it's history.<br /><br />

        <strong>BACEN</strong><br />
        For getching BACEN's data I went to their public domain to see what was avaiable and for my surprise they have a lot os data already structured and updated daily!<br />
        For example, if you enter <strong><a href="https://dadosabertos.bcb.gov.br/dataset/1178-taxa-de-juros---selic-anualizada-base-252">here</a></strong> you'll see that it has 
        several options to download the data from and you'll also notice it has a code to is, in this example it's 1178 as well the dates that you want to download.<br />
        With that being said i did an engine that will run through and array of codes, check the latest date you'll input and download the data from this date untill today.
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString01}
          </SyntaxHighlighter>
        </div>
        <br /><br />
        So i looped this getting all the data and saving it into json files.<br />
        <br /><br />

        <strong>StockMarket</strong><br />
        To get the stockmarket data i used yahoo-finance2 dependency.
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString02}
          </SyntaxHighlighter>
        </div>
        <br /><br />

        This gets the stock ticker and the latest date you want to fetch the information from and gives back a really long object with several options on it, for this project
        i used this ones:
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString03}
          </SyntaxHighlighter>
        </div>
        <br /><br />

        So with that i have the stock information trading history and after that i save it all into a sql database using knex.<br /><br /><br />
        
        If you need more information you can check my github repository.<br />
        I hope you have enjoyed the reading for i sure did enjoy writting it!<br /><br /><br />

      </p>
    </Container>
    </div>
  );
}
//