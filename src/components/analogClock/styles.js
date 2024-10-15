//
import styled from 'styled-components';
//
export const Project = styled.div`

margin-top: 12rem;
padding: 2rem;
display: flex;
justify-content: center;

.clock {
  width: 30rem;
  height: 30rem;
  background-color: white;
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
}

.clock .number {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotate(var(--rotation));
  font-size: 1.5rem;
  color: black;
}

.clock .number1 {--rotation: 30deg;}
.clock .number2 {--rotation: 60deg;}
.clock .number3 {--rotation: 90deg;}
.clock .number4 {--rotation: 120deg;}
.clock .number5 {--rotation: 150deg;}
.clock .number6 {--rotation: 180deg;}
.clock .number7 {--rotation: 210deg;}
.clock .number8 {--rotation: 240deg;}
.clock .number9 {--rotation: 270deg;}
.clock .number10 {--rotation: 300deg;}
.clock .number11 {--rotation: 330deg;}

.clock .hand {
  position: absolute;
  bottom: 50%;
  left: 50%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  transform-origin: bottom;
  z-index: 5;
}

.dot {
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  background: black;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  z-index: 10;
}

.clock .hand.second {
  width: .3rem;
  height: 45%;
  background-color: red;
}

.clock .hand.minute {
  width: .7rem;
  height: 40%;
  background-color: black;
  margin-left: -0.45rem;
}

.clock .hand.hour {
  width: .8rem;
  height: 25%;
  background-color: black;
  margin-left: -0.45rem;
}

`;
//