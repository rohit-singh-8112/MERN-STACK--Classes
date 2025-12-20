import './css/input.css'
export const TxtInput = () => {
  return (
    <input type="text" id='inputText' className="form-control" placeholder="Enter text"></input>
  )
}

export const DateInput = () => {
  return (
    <input type="datetime-local" className="form-control" ></input>
  )
}
