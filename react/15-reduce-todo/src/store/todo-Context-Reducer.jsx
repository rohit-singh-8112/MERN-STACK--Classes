import { createContext, useReducer } from "react";
import  TodoData from "./data";
import Newval from "./reducerFunction";

const TodoContextReducer = createContext();



export const TodoContextReducerProvider = ({children}) =>{
    const [todoItem, todoDispatcher] = useReducer (Newval,TodoData);
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
    

    return<TodoContextReducer.Provider value={{todoItem, addTodoInput, deleteTodoElement}}>
        {children}
    </TodoContextReducer.Provider>
}



export default TodoContextReducer;