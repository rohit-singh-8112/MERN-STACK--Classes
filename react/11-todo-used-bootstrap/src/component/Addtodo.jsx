import './CSS/button.css'
import { useRef, useContext } from 'react';
import ListContext from '../store/TodoContext';

const AddTodo = () => {
  const textInput = useRef();
  const dateInput = useRef();
  const {addTodoInput} = useContext(ListContext);

  const AddHandler =() => {
    const textValue = textInput.current.value;
    const dateValue = dateInput.current.value;
    addTodoInput(textValue, dateValue);
    textInput.current.value ='';
    dateInput.current.value = '';
  }
    return (
      <div className="container text-center ">
        <div className="row">
          <div className="col-5">
            <input type="text" className="form-control textInput" placeholder="Enter todo here"  ref={textInput}/>
          </div>
          <div className="col-4">
            <input type="datetime-local" className="form-control dateInput" ref={dateInput} />
            </div>
          <div className="col-3">
            <button type="button" className="btn ms-1 mt-1 btn-outline-success button" onClick={AddHandler}>Success</button>
          </div>
        </div>
      </div>
    );
}
export default AddTodo;