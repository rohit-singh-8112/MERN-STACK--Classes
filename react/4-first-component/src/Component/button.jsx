import "./button.css"
const Button = ({type, btnText, Handlar}) => {

  if (type === 'primary') {
    return <button className="btn-primary" onClick={Handlar}>{btnText}</button>
  } else if (type === 'secondary') {
    return <button className="btn-secondary" onClick={Handlar} >{btnText}</button>
  } else {
    return <button className="btn-default" onClick={Handlar}>{btnText}</button>
  }


}
export default Button;

