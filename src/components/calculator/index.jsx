//
import { useState } from "react";
import * as math from "mathjs";
import { Project } from './styles';
import Button from './components/Button.jsx';
import Input from './components/Input.jsx';
//
export function Calculator(){

  const [current, setCurrent] = useState("");
  const [latest, setLatest] = useState("");

  const intoCurrent = (newInput) => {
    setCurrent((current) => [...current, newInput]);
  }
  
  const calculateResult = () => {
    const input = current.join("");
    setLatest(math.evaluate(input));
  };
  
  const eraseNumber = () => {
    const input = current.slice(0,-1);
    setCurrent(input);
  };

  const resetInput = () => {
    setCurrent("");
    setLatest("");
  };

  return(
    <Project>
      <Input current={current} latest={latest} />
      <div className="wrapper">
        <div className="rowWrapper">
          <Button pressedButton="AC" handleClick={resetInput}/>
          <Button pressedButton="DEL" handleClick={eraseNumber} />
          <Button pressedButton="÷" handleClick={intoCurrent} />
          <Button pressedButton="*" handleClick={intoCurrent} />
        </div>
        <div className="rowWrapper">
          <Button pressedButton="1" handleClick={intoCurrent} />
          <Button pressedButton="2" handleClick={intoCurrent} />
          <Button pressedButton="3" handleClick={intoCurrent} />
          <Button pressedButton="+" handleClick={intoCurrent} />
        </div>
        <div className="rowWrapper">
          <Button pressedButton="4" handleClick={intoCurrent} />
          <Button pressedButton="5" handleClick={intoCurrent} />
          <Button pressedButton="6" handleClick={intoCurrent} />
          <Button pressedButton="-" handleClick={intoCurrent} />
        </div>
        <div className="rowWrapper">
          <Button pressedButton="7" handleClick={intoCurrent} />
          <Button pressedButton="8" handleClick={intoCurrent} />
          <Button pressedButton="9" handleClick={intoCurrent} />
          <Button pressedButton="." handleClick={intoCurrent} />
        </div>
        <div className="rowWrapper">
          <Button pressedButton="0" handleClick={intoCurrent} />
          <Button pressedButton="=" handleClick={calculateResult} />
        </div>
      </div>
    </Project>
  );
};
//