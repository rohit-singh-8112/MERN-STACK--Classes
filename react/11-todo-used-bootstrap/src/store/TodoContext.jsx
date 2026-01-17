import { createContext, useState} from "react";
import TodoData from './TodoData'

const ListContext = createContext();

export const ListContextProvider=({children})=>{
const [todoItem, setTodoItem] = useState(TodoData);
 const addTodoInput=(textValue,dateValue)=>{
  setTodoItem(todoItem => {
    const id = Date.now();
  
    return [ ...todoItem, { id:id , todoText:textValue, todoDate:dateValue}]
  })
 }

 const deleteTodoElement=(elementId)=>{
  setTodoItem(todoItem =>{
    return todoItem.filter(todo => elementId !== todo.id )}
  )
 }

  return<ListContext.Provider value={{todoItem, addTodoInput, deleteTodoElement}}>
    {children}
  </ListContext.Provider>
};

export default ListContext;
