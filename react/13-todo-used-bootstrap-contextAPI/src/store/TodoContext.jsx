import { useState, createContext } from "react";
import TodoData from "./TodoData";

const TodoItemContext = createContext();

export const TodoItemProvider = ({Children}) =>{
  const [todoItem, setTodoItem] = useState(TodoData);
 const addTodoInput=(textValue,dateValue)=>{
  setTodoItem(todoItem => {
    // const id = Date.now();
    return [{ id:textValue , todoText:textValue, todoDate:dateValue}, ...todoItem]
  })
 }

 const deleteTodoElement=(elementId)=>{
  setTodoItem(todoItem =>{
    return todoItem.filter(todo => elementId !== todo.id )}
  )
 }
 

//  const PassingValue ={
//   todoItem: todoItem, 
//   addTodoInput: addTodoInput,
//   deleteTodoElement: deleteTodoElement

//  }

 return(
  <TodoItemContext.Provider value={ {todoItem, addTodoInput,deleteTodoElement} }>
    {Children}
  </TodoItemContext.Provider>
 );
}
export default TodoItemContext;