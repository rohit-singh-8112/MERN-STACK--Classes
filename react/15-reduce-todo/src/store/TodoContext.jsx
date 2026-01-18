import { createContext, useState } from "react";
import TodoData from "./TodoData";
const TodoItemContext = createContext();

export const TodoItemContextProvider = ({children}) =>{
  const [todoItem, setTodoItem] = useState(TodoData);
  const addTodoInput=(textValue,dateValue)=>{
  setTodoItem(todoItem => {
    const id = Date.now();
    return [{ id:id , todoText:textValue, todoDate:dateValue}, ...todoItem]
  })
 }

 const deleteTodoElement=(elementId)=>{
  setTodoItem(todoItem =>{
    return todoItem.filter(todo => elementId !== todo.id )}
  )
 }

  return<TodoItemContext.Provider value={{todoItem, addTodoInput, deleteTodoElement }}>
    {children}
  </TodoItemContext.Provider>

}

export default TodoItemContext;
