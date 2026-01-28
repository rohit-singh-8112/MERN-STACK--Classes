import { useContext } from "react"
import { useEffect } from "react"
import { useState } from "react"
import TodoContextReducer from '../store/todo-Context-Reducer'
import{ openModal } from "../utils/modalUtil"

const LoadItems = () => {
    const {todoItem, addAllTodoItems}=useContext(TodoContextReducer);
    const[isLoading,setIsLoading]= useState(false);
    
    useEffect(()=>{
        setIsLoading (true);
        fetch('http://localhost:3001/todos')
        .then((res)=>res.json())
        .then((item)=>{
            // console.log(item);
            const newItem = item.map(item => openModal(item)
            );
            addAllTodoItems(newItem); 
        })
        .finally(()=>{
            setIsLoading(false);    
        })
        .catch((error)=>{
            console.error('Error loading data:', error);
            alert('Failed to load data: ' + error.message);
        });
       
        },[]);
    
  

        // const LoadDataServer = () =>{
        //     fetch('http://localhost:3000/todos')
        //     .then((res)=>res.json())
        //     .then((item)=>{
        //         // console.log(item);
        //         const newItem = item.map(item => ({
        //             id:item.id,
        //             textValue:item.task,
        //             dateValue:item.date
        //         })
        //         );
        //         addAllTodoItems(newItem);
                
        //     })
        //     .catch((error)=>{
        //         console.error('Error loading data:', error);
        //         alert('Failed to load data: ' + error.message);
        //     })
        // }
  return (
    <>
      {isLoading && (
        <div className="text-center">
            <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
      )}
      {!isLoading && todoItem.length === 0 && (
        <p>Enjoy your day No Todos are here</p>
        )}
    </>
  )
}

export default LoadItems
