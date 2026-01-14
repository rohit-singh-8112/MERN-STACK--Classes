 import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import TodoItemContext from "../store/TodoContext";

  const TodoItems = () => {
   const {todoItem} = useContext(TodoItemContext);
    return (
      <>
       { todoItem.map((item) => (<TodoItem key={item.id} keyId={item.id} todoText={item.todoText} todoDate={item.todoDate} /> ))}
      </>
    );
  };

  export default TodoItems; 