import { useState } from 'react'
import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'

import TodoData from './component/StoreData'

function App() {
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

  return (
    <><center>
        <AppName />
        <AddTodo addTodoInput={addTodoInput} />
        <TodoItems todoItem={todoItem} deleteTodoElement={deleteTodoElement}/>
    </center>
    </>
  )
}

export default App
