//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
///import { UrlShrinker } from '../../../components/urlShrinker';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsUrlShrinkEng(){

const codeString00 = `exports.up = async function(knex) {
  await knex.schema.createTable('db-url', (table) => {
    table.uuid('id').primary()
    table.uuid('nanoidWebsite')
    table.text('website').notNullable()
  });
};`;

  const codeString01 = `app.get('/', async () => {
  //return await knex('db-url').select('*');
  //console.log(websites);
  const websites = await knex('db-url').select('website').groupBy('website').count('website as howMany');
  return websites;
});`;

  const codeString02 = `app.post('/', async (request, reply) => {
  const createWebsiteNanoIdBodySchema = z.object({
    website: z.string(),
  });

  const { website } = createWebsiteNanoIdBodySchema.parse(
    request.body,
  );

  let shortid;
  const checkWebsiteExists = await knex('db-url').select('nanoidWebsite').where({website: website}).first();

  if (checkWebsiteExists) {
    shortid = checkWebsiteExists.nanoidWebsite;
  } else {
    await knex('db-url')
    .insert({
      id: crypto.randomUUID(),
      nanoidWebsite: nanoid(8),
      website,
    });
  };
  
  //console.log(shortid);

  return reply.status(201).send({ shortUrl: shortid });

});`;

  const codeString03 = `app.get('/:nanoidInput', async (request, reply) => {

  const { nanoidInput } = request.params;

  const record = await knex('db-url').select('website').where({nanoidWebsite: nanoidInput}).first();
  
  if (record) {
    return reply.redirect(record.website.startsWith("http") ? record.website : \`http://\${record.website}\`);
  } else {
    reply.status(404).send({error: 'url not found'});
  }

});`;

  return(
    <div>
    <MenuProject />
    <Container>
      <h1>Url Shrink</h1>
      <p>
        This project it&apos;s done and published at my <a href="https://github.com/thalfor/urlShrinkerBackend">Github</a> and 
        even though it&apos;s not fully adapted to be here on my website I&apos;ll talk about how i created it.<br /><br />
        Used dependecies:<br />
        - Fastify<br />
        - @fastify/cors<br />
        - dotenv<br />
        - zod<br />
        - knex<br />
        - sqlite3<br />
        - nanoid<br /><br />

        <strong>Fastify // @fastify/cors</strong><br />
        Instead of using Express I decided to use Fastify for I&apos;m currently coursing a NodeJS Expert course and Fastify and it&apos;s own Cors it was introduced there.<br />
        So i thought it was better for my understanding to use it, also i noticed that it&apos;s better maintained since the team behind it is really active.<br /><br />

        <strong>nanoid</strong><br />
        Nanoid is a tool to created random ID the size you want it. Very practical and simple to use.<br />
        Here&apos;s the <a href="https://github.com/ai/nanoid">documentation</a>.<br /><br />

        <strong>zod</strong><br />
        This is a great application to pre define some inputs, since JS doesn&apos;t accepts basically everything this tool actually makes it pre-defined and well documented.<br />
        You&apos;ll notice for example on the POST code down bellow that a Schema is created before the code does it&apos;s thing using Zod defining that the website is a string. <br /><br />
        
        <strong>dotenv // knex // sqlite3</strong><br />
        I honestly think they&apos;re extremely comon so I won&apos;t be going into specifics here.<br /><br /><br />

        <strong>Backend Structure</strong><br />
        The backend structure is define by 3 main routes and 1 migration:<br />
        1 - Listing all websites along how many times they were submited using a GET method.<br />
        2 - Posting a website to get the NanoID for it using a POST method.<br />
        3 - Redirecting to the website required when used the NanoID using a GET method.<br /><br />

        <strong>Migration</strong><br />
        The migration was created with a unique ID, a NanoID and the website:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString00}
          </SyntaxHighlighter>
        </div>
        <br /><br />

        <strong>1 - Listing:</strong><br />
        Using a simple knex query I was able to bring the websites on the database called &apos;db-url&apos; grouping and counting by the website.<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString01}
          </SyntaxHighlighter>
        </div>
        <br /><br />

        <strong>2 - Posting:</strong><br />
        The POST method is quite simple but the one thing that i found important to do, and still needs some improvement is to check if the website was already used and reuse the same NanoID for it.<br />
        I said that still needs improvement because this logic doesn&apos;t check everything, for example, &apos;www.google.com&apos; is diferent from &apos;https://www.google.com&apos;, so this checking logic still have to be created.<br />
        Also it returns the ShortID to the frontend.<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString02}
          </SyntaxHighlighter>
        </div>
        <br /><br />

        <strong>3 - Redirecting:</strong><br />
        It&apos;s as simple as a knex query to get the website with the respective NanoID and redirect to it.<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString03}
          </SyntaxHighlighter>
        </div>
        <br /><br /><br />

        This a great example of data manipulation using Knex with a good Frontend comunication and it was super fun to do so!<br />
        I hope you&apos;ve enjoyed the reading for i sure enjoyed writing and creating this project!

        <br /><br /><br />
      </p>
    </Container>
    </div>
  );
}
//
//<UrlShrinker />
//