import './css/button.css'
import { InputHandler } from './data';

const Button = ({type, btnText, InputHandler}) => {
  if(type == 'submit') {
    return (
      <button className="success"  onClick={InputHandler}>{btnText}</button>
    );
  }else {
    return (
      <button className="denger" >{btnText}</button>
    );
  }
}
export default Button;
