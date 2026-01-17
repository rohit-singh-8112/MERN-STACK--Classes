

import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'

import {ListContextProvider} from './store/TodoContext'

function App() {


  return (
    <ListContextProvider>
      <center>
          <AppName />
          <AddTodo />
          <TodoItems />
      </center>
    </ListContextProvider>
  )
}

export default App
