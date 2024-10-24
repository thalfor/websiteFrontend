//
import { Container } from './styles';
import { MenuProject } from '../../../components/menuProject';
import { Login } from '../../../components/login';
//
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
//
export function DevProjectsLoginEng(){

  const codeString01 = `async create(request, response) {
    const { email, password } = request.body;
  
    const database = await sqliteConnection();
    
    const checkUserExists = await database.get("select * from users where email = (?)", [email]);
    if(checkUserExists){
      throw new AppError("this email already exists");
    }
  
    const hashedPassword = await hash(password, 8)
  
    await database.run("insert into users (email, password) values (?, ?)", [email, hashedPassword]);
    
    response.status(201).json({ email, password });
  }`;

  const codeString02 = `function handleSignUp(){
  if(!email || !password){
    return alert("to signUp all fields must have value.");
  }
  
  api.post("/users", { email, password })
    .then(() => {
      alert("signUp was successful");
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message);
      } else {
        alert("operation not valid.");
      }
    });
}`;

const codeString03 = `class SessionsController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    if(!user) {
      throw new AppError("email or password incorrect.")
    }

    const comparePasswords = await compare(password, user.password);

    if(!comparePasswords) {
      throw new AppError("email or password incorrect.")
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn
    });
    
    return response.json({ email, password, token });
  }
}`;
   
const codeString04 = `//
// Hook Function
//
async function signIn(params){
  try {
    const response = await api.post("/sessions", params);
    const { email, token } = response.data;

    localStorage.setItem("@loginProject:email", JSON.stringify(email));
    localStorage.setItem("@loginProject:token", token);

    api.defaults.headers.common['Authorization'] = \`Bearer \${token}\`;
    setData({ email, token });

    alert("logIn successful!");

  } catch (error) {
    if(error.response){
      alert(error.response.data.message);
    } else {
      alert("something went wrong.");
    }
  }
}
//
// JSX call
//
function handleSignIn(){
  if(!email || !password){
    return alert("to signUp all fields must have value.");
  }
  signIn({ email, password });
}`;

  return(
    <div>
    <MenuProject />
    <Container>
      <h1>LogIn</h1>
      <Login />
      <p>
        This is a project that shows a little bit of backend application. You can signUp and then LogIn and it will save your password and email.
        I used Insomnia and BeeKeeper for my backend.<br />
        To try it i sugest you type in a fictional email like "yourname@email.com" and put it a simple password. It may take a few seconds.<br />
        For this to work I created a simple backend application that stores the user credentials checking if the same already exists. 
        It's also divided into Backend and Frontend, here's some of it. <br /><br />
        Backend:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString01}
          </SyntaxHighlighter>
        </div>
        <br />
        
        Frontend:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString02}
          </SyntaxHighlighter>
        </div>
        <br />
        <br />

        For Login I created a Hook authentication that check with a Backend SessionsController if the information checks.<br />
        Backend: <br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString03}
          </SyntaxHighlighter>
        </div>
        <br />
        Frontend:<br />
        <div className='codeblock'>
          <SyntaxHighlighter lineProps={{style: {wordBreak: 'break-all', whiteSpace: 'pre-wrap', flexWrap: 'wrap'}}} style={a11yDark} wrapLines={true} language="jsx">
            {codeString04}
          </SyntaxHighlighter>
        </div>
        <br />
        <br />
        Now this is a project that will have more updates, i'm currently creating a Change Password box so you can try and change it.<br /><br />

        I hope you have enjoyed the reading for i sure did enjoyed writting! See ya!



      </p>
    </Container>
    </div>
  );
}
//