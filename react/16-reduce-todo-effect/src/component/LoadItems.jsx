import { useContext } from "react"
import TodoContextReducer from '../store/todo-Context-Reducer'

const LoadItems = () => {
    const {todoItem, addAllTodoItems}=useContext(TodoContextReducer);
    if (todoItem.length !== 0){
        return <></>;
    }
    const LoadDataServer = () =>{
        fetch('http://localhost:3000/todos')
        .then((res)=>res.json())
        .then((item)=>{
            // console.log(item);
            const newItem = item.map(item => ({
                id:item.id,
                textValue:item.task,
                dateValue:item.date
            })
            );
            addAllTodoItems(newItem);
            
        })
        .catch((error)=>{
            console.error('Error loading data:', error);
            alert('Failed to load data: ' + error.message);
        })
    }
  return (
    <>
      <h2>Data is Empty</h2>
      <button onClick={LoadDataServer}>Load Data</button>
    </>
  )
}

export default LoadItems
