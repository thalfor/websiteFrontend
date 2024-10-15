//
import { Container } from './Button.js';
//
const Button = ({ pressedButton, handleClick }) => {
  return(
    <Container>
    <button
      className="wrapper"
      onClick={() => handleClick(pressedButton)}
    >
      {pressedButton}
    </button>
    </Container>
  );
}
//
export default Button;
//