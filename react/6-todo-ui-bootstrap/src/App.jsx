import { useState } from 'react'
import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'

import './App.css'

function App() {

 

  return (
    <><center>
        <AppName />
        <AddTodo />
        <TodoItems />
    </center>
    </>
  )
}

export default App
