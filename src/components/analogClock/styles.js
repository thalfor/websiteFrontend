//
import styled from 'styled-components';
//
export const Project = styled.div`

padding: 2rem;
display: flex;
justify-content: center;

.clock {
  width: 300px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  border: 2px solid black;
  position: relative;
}

.clock .number {
  --rotation: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transform: rotate(var(--rotation));
  font-size: 1.5rem;
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
  --rotation: 0;
  position: absolute;
  bottom: 50%;
  left: 50%;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  transform-origin: bottom;
  z-index: 10;
  transform: translateX(-50%) rotate(calc(var(--rotation) * 1deg));
}

.clock::after {
  content: "";
  position: absolute;
  background-color: black;
  z-index: 11;
  width: 15px;
  height: 15px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
}

.clock .hand.second {
  width: 3px;
  height: 45%;
  background-color: red;
}

.clock .hand.minute {
  width: 7px;
  height: 40%;
  background-color: black;
}

.clock .hand.hour {
  width: 10px;
  height: 35%;
  background-color: black;
}

`;
//