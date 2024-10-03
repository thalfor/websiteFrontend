//
import { Container } from './styles';
import { Navbar } from '../../../components/navBar';
//
export function DevProjectsCalculatorEng(){
  return(
    <Container>
      <Navbar />
      <h1>Calculator</h1>
      <p>
      The code is divided in 3 parts:

        HTML
        CSS
        JS
        HTML
        We have here the creation of all calculator's buttons as buttons so that we later on link the js logic to it.

        CSS
        Here we built the basic style of a simple windows calculator.

        JS
        Here we need to define classes and function of all numbers, calculus, display settings, how we'll show the results.
        

        It was quite interesting to create this because there were issues aparently small but that made a huge diference, 
        for exemple, the "." had to be treated as a number, how to put only one no matter how many times you clicked it, how to treat a decimal number on display.

        With JS we had to create all basic math operations with a Switch case:

        switch (this.operacao)&#123;
          case '+':
            computation = ant + atual;
          break;
          case '-':
            computation = ant - atual;
          break;
          case '*':
            computation = ant * atual;
          break;
          case '÷':
            computation = ant / atual;
          break;
          default:
            return;
        &#125;
      </p>
    </Container>
  );
}
//