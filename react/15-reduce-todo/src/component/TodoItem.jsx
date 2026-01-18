import React,{ useContext } from 'react';
import TodoItemContext from '../store/TodoContext';

import './CSS/button.css'
const TodoItem = ({keyId, todoText, todoDate}) => {
 const {deleteTodoElement} = useContext(TodoItemContext);
    return (
         <div className="container text-center">
        <div className="row ms-1" >
          <div className="col-5 text-start text-truncate">{todoText}</div>
          <div className="col-4 text-start text-truncate">{todoDate}</div>
          <div className="col-3">
            <button type="button" className="btn mt-1 btn-outline-danger button" onClick={()=>deleteTodoElement(keyId)}>Delete</button>
          </div>
        </div>
      </div>
    );
  };
  export default TodoItem; 