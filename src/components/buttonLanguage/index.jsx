//
import { Container } from './styles';
//
export function Navbar(){

  const switchTheme = (e) => {
    if(e.target.checked){
      document.querySelector('body').setAttribute('data-theme','dark')
    } else {
      document.querySelector('body').setAttribute('data-theme','light')
    }
  }

  return(
    <Container>
      <div className='wrapper'>
        <label className="switch">
          <input type="checkbox" onChange={switchTheme} />
          <span className="slider round"></span>
        </label>
      </div>
    </Container>
  );
};
//