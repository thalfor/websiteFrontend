//
import { Container } from './styles';
import { Navbar } from '../../../components/navBar';
//
export function DevProjectsAnalogClockEng(){
  return(
    <Container>
      <Navbar />
      <h1>Analog Clock</h1>
      <p>

        The code is divided in 3 parts:

        HTML
        JavaScript
        CSS
        With the true challenge being the CSS due to the fact it is a round analogic clock and not just simply printing the time on screen.

        HTML
        HTML was created the classes of all numbers and pointers so in this way we're able to work our way to build not only the JS script for getting the 
        current time but also we're able to make the correct ajustments in CSS to print the Analogic Clock as it is.

        JS
        To get the current time there's no much of a challenge because just by using .getSeconds, .getMinutes, .getHours we have the final goal. However 
        it's important to realize that since the clock is round we need to make sure the pointers move acording to it's time and we do that by diving the seconds, 
        minutes, hours by it's clock ratio (60,60,12) having our full cicle of 360.

        CSS
        This is the real tricky part, we need:

        - to build a circle.
        - to populate this circle with numbers, 1 to 12.
        - to fit the numbers within this circle.
        - to build the pointers (sec, min, hours).
        - to build the dot at the middle of the clock where the pointers will be fixed.
        By using the classes created in HTML we can set our numbers according to it's position (degrees) on the clock and setting the clock's 
        position as relative, so we will have:

        .clock .number1 &#123;--rotation: 30deg;&#125;
        .clock .number2 &#123;--rotation: 60deg;&#125;
        .clock .number3 &#123;--rotation: 90deg;&#125;
        .clock .number4 &#123;--rotation: 120deg;&#125;
        .clock .number5 &#123;--rotation: 150deg;&#125;
        .clock .number6 &#123;--rotation: 180deg;&#125;
        .clock .number7 &#123;--rotation: 210deg;&#125;
        .clock .number8 &#123;--rotation: 240deg;&#125;
        .clock .number9 &#123;--rotation: 270deg;&#125;
        .clock .number10 &#123;--rotation: 300deg;&#125;
        .clock .number11 &#123;--rotation: 330deg;&#125;
        Notice that we did not input the 12 because it's position is already the natural number's disposition.

        About the pointers we need to use:

        transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg))
        So in this way we set the pointers turning with one of it's ends fixed in the middle of the clock.


        Conclusion

        To implement this type of code one must have not only a good understanding of CSS but also a good understanding of it's logic since we needed 
        to partition the numbers and pointers in HTML for later in JS and CSS get the clock done.
        
      </p>



      
    </Container>
  );
}
//