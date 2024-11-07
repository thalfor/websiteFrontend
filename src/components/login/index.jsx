//
import { Project } from './styles';
import { useState } from 'react';
import { api } from '../../services/api';
import { useAuth } from '../../hooks/auth';
//
export function Login(){

  //const { updateProfile, signIn } = useAuth();
  const { signIn } = useAuth();

  // for SignUp and LogIn
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // for Changing Password
  //const [newPassword, setNewPassword] = useState("");
  //const [oldPassword, setOldPassword] = useState("");

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
/*
  async function handleUpdate(){
    if(!email || !newPassword || !oldPassword){
      return alert("to update password all fields must have value.");
    }
    const updated = {
      email,
      password: newPassword,
      passwordOld: oldPassword,
    }
    const userUpdated = Object.assign(updated);
    await updateProfile({ email, oldPassword });

  }
*/
  return(
    <Project>
      <div className='wrapper'>
        <div className='boxSign'>

          <h1>sign Up</h1><br />
          email:<br />
          <input 
            className='inputAll'
            placeholder='email' 
            type="text" 
            id='textBox' 
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          password:<br />
          <input 
            className='inputAll'
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
            className='inputAll'
            placeholder='email' 
            type="text" 
            id='textBox' 
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          password:<br />
          <input 
            className='inputAll'
            placeholder='password' 
            type="password" 
            id='textBox' 
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <button onClick={handleSignIn}>
            Log In
          </button>

        </div>
      </div>
    </Project>
  );
};
//
/*
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
*/