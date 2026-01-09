/* eslint-disable react-hooks/unsupported-syntax */
import Button from "./Button";

const NumPad = ({ displayValue, setDisplayValue }) => {
  const Numberarr = ["1","2","3","4","5","6","7","8","9","0"];
  const Operatorsarr = ['+','-','*','/'];

  const addToDisplay = (text) => {
   setDisplayValue(displayValue + text);
  }
  const evaluate = (expression) => {
   const result = eval(expression);
    setDisplayValue(result);
  };
  return(
    <>
    <br />
      <Button key="clear" label="C" onClickHandler={() => setDisplayValue('')}/>
      <br />
      <div className="flex flex-wrap align-auto">
        {Numberarr.map((num,index) => (
          <Button key={index} label={num} onClickHandler={() => addToDisplay(num)} />
        ))}
      </div> 
      {Operatorsarr.map((op,index) => (
        <Button key={index} label={op} onClickHandler={() => addToDisplay(op)} />
      ))} <br />
      <Button key="equals" label="=" onClickHandler={() => evaluate(displayValue)} />
 
    </>
  );
  
} 

export default NumPad;