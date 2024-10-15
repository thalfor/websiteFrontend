//
import { useEffect, useState } from "react";
import { Project } from './styles';
//
export function AnalogClock(){
  
  const [secondsDeg, setSecondsDeg] = useState(0);
  const [minutesDeg, setMinuteDeg] = useState(0);
  const [hoursDeg, setHoursDeg] = useState(0);

  useEffect(() => {
      const interval = setInterval(updateTime, 1000);
      return () => clearInterval(interval);
    }, []);
    
    const updateTime = () => {
      const date = new Date();
      const secondsToDeg = (date.getSeconds() / 60) * 360;
      const minutesToDeg = (date.getMinutes() / 60) * 360;
      const hoursToDeg = ((date.getHours() % 12) / 12) * 360 + (minutesToDeg / 12);

    setSecondsDeg(secondsToDeg);
    setMinuteDeg(minutesToDeg);
    setHoursDeg(hoursToDeg);
  }
  
  return(
    <Project>
      <div class="clock">
        <div 
          id="data-hour-hand"
          class="hand hour" 
          style={{transform: `rotate(${hoursDeg}deg)`,}}
        ></div>
        <div 
          id="data-minute-hand"
          class="hand minute"
          style={{transform: `rotate(${minutesDeg}deg)`,}}
        ></div>
        <div 
          id="data-second-hand"
          class="hand second"
          style={{transform: `rotate(${secondsDeg}deg)`,}}
        ></div>
        <div className="dot"></div>
        <div class="number number1">1</div>
        <div class="number number2">2</div>
        <div class="number number3">3</div>
        <div class="number number4">4</div>
        <div class="number number5">5</div>
        <div class="number number6">6</div>
        <div class="number number7">7</div>
        <div class="number number8">8</div>
        <div class="number number9">9</div>
        <div class="number number10">10</div>
        <div class="number number11">11</div>
        <div class="number number12">12</div>
      </div>
    </Project>
  );
};
//