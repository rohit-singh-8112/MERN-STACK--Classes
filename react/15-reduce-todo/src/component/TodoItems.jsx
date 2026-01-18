 import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoContextReducer from "../store/todo-Context-Reducer";

  const TodoItems = () => {
   const {todoItem} = useContext(TodoContextReducer);
    return (
      <>
       { todoItem.map((item) => (<TodoItem key={item.id} keyId={item.id} todoText={item.todoText} todoDate={item.todoDate} /> ))}
      </>
    );
  };
 
  export default TodoItems; 