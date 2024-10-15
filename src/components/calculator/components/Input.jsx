//
import { Container } from './Input.js';
//import "./Input.css";
//
const Input = ({ current, latest }) => {
  return (
    <Container>
      <div className="wrapper">
        <div className="latest">
          <h1>{latest}</h1>
        </div>

        <div className="current">
          <h3>{current}</h3>
        </div>
      </div>
    </Container>
  );
};
//
export default Input;
//