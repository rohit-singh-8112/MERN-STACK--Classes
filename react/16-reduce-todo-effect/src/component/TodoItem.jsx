import React,{ useContext } from 'react';
import TodoContextReducer from '../store/todo-Context-Reducer';

import './CSS/button.css'
const TodoItem = ({keyId, todoText, todoDate}) => {
 const {deleteTodoElement} = useContext(TodoContextReducer);  
  

  const deleteHandler =(keyId)=>{
    fetch(`http://localhost:3001/todos/${keyId}`,{
      method:'DELETE'
    })
    .then((response)=>{ 
      return response.json();
    })
    .then((data)=>{
      // console.log(data);
      deleteTodoElement(data.id);
    })
    .catch((error)=>{
      console.log("Error", error);
    });
  }

    return (
         <div className="container text-center">
        <div className="row ms-1" >
          <div className="col-5 text-start text-truncate">{todoText}</div>
          <div className="col-4 text-start text-truncate">{todoDate}</div>
          <div className="col-3">
            <button type="button" className="btn mt-1 btn-outline-danger button" onClick={()=>deleteHandler(keyId)}>Delete</button>
          </div>
        </div>
      </div> 
    );
  };
  export default TodoItem; 