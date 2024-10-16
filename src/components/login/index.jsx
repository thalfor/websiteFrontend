//
import { Project } from './styles';
//
export function Login(){

  return(
    <Project>
      <div className='wrapper'>
        <div className='boxSign'>
          <h1>sign Up</h1><br />
          email:<br />
          <input placeholder='email' type="text" id='textBox' /><br />
          password:<br />
          <input placeholder='password' type="text" id='textBox' /><br />
          User created!
        </div>
        <div className='boxSign'>
          <h1>sign In</h1><br />
          email:<br />
          <input placeholder='email' type="text" id='textBox' /><br />
          password:<br />
          <input placeholder='password' type="password" id='textBox' /><br />
          Login successful!
        </div>
        <div className='boxChange'>
          <h1>Change Password</h1><br />
          email:<br />
          <input placeholder='email' type="text" id='textBox' /><br />
          old password:<br />
          <input placeholder='old password' type="password" id='textBox' /><br />
          new password:<br />
          <input placeholder='new password' type="password" id='textBox' /><br />
          Password changed!
        </div>
      </div>
    </Project>
  );
};
//