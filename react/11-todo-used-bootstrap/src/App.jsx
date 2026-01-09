import { useState } from 'react'
import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'

import TodoData from './component/StoreData'

function App() {
const [todoItem, setTodoItem] = useState(TodoData);
 const addTodoInput=(textValue,dateValue)=>{
  setTodoItem(currentItems => {
    return [...currentItems,{ id: Date.now(), textValue, dateValue}]
  })
 }

  return (
    <><center>
        <AppName />
        <AddTodo addTodoInput={addTodoInput} />
        <TodoItems todoItem={todoItem}/>
    </center>
    </>
  )
}

export default App
