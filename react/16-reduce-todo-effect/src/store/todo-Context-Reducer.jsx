import { createContext, useReducer } from "react";
// import  TodoData from "./data";
import Newval from "./reducerFunction";

const TodoContextReducer = createContext();



export const TodoContextReducerProvider = ({children}) =>{
    const [todoItem, todoDispatcher] = useReducer (Newval,[]);
    const addTodoInput=(textValue,dateValue)=>{
        const id = Date.now();
         todoDispatcher({
            type: 'ADD',
            payload: {id,textValue,dateValue}

         })
 }

 const deleteTodoElement=(elementId)=>{
     todoDispatcher({
        type:'DELETE',
        payload: {elementId}
     })
 }
    
 const  addAllTodoItems =(todoItem)=>{
    todoDispatcher({
        type:'LOAD_ALL_ITEM',
        payload: {
            allItems: todoItem
        }
     })
 }

    return<TodoContextReducer.Provider value={{todoItem, addTodoInput, deleteTodoElement,addAllTodoItems}}>
        {children}
    </TodoContextReducer.Provider>
}



export default TodoContextReducer;