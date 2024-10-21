//
import { Project } from './styles';
import { useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
//
export function Login(){

  const { user, updateProfile } = useAuth();

  // for SignUp and LogIn
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // for Changing Password
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn(){
    if(!email || !password){
      return alert("to signUp all fields must have value.");
    }
    signIn({ email, password });
  }

  function handleSignUp(){
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
  }

  async function handleUpdate(){
    if(!email || !newPassword || !oldPassword){
      return alert("to signUp all fields must have value.");
    }

    const updated = {
      email,
      password: newPassword,
      passwordOld: oldPassword,
    }
    
    const userUpdated = Object.assign(user, updated);

    await updateProfile({ userUpdated });

  }

  return(
    <Project>
      <div className='wrapper'>
        <div className='boxSign'>

          <h1>sign Up</h1><br />
          email:<br />
          <input 
            placeholder='email' 
            type="text" 
            id='textBox' 
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          password:<br />
          <input 
            placeholder='password' 
            type="password" 
            id='textBox' 
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={handleSignUp}>
            SignUp
          </button>

        </div>
        <div className='boxSign'>

          <h1>log In</h1><br />
          email:<br />
          <input 
            placeholder='email' 
            type="text" 
            id='textBox' 
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          password:<br />
          <input 
            placeholder='password' 
            type="password" 
            id='textBox' 
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={handleSignIn}>
            Log In
          </button>

        </div>
        <div className='boxChange'>
          <h1>Change Password</h1><br />

          email:<br />
          <input 
            placeholder='email' 
            type="text" 
            id='textBox' 
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          old password:<br />
          <input 
            placeholder='old password' 
            type="password" 
            id='textBox' 
            onChange={(e) => setOldPassword(e.target.value)}
          /><br />
          new password:<br />
          <input 
            placeholder='new password' 
            type="password" 
            id='textBox' 
            onChange={(e) => setNewPassword(e.target.value)}
          /><br />
          <button onClick={handleUpdate}>
            Change Password
          </button>

        </div>
      </div>
    </Project>
  );
};
//