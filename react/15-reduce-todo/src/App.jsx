
import {TodoItemContextProvider} from './store/TodoContext'

import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'



function App() {
 
 
  return (
      <TodoItemContextProvider>
        <center>
          <AppName />
          <AddTodo />
          <TodoItems />
        </center>
      </TodoItemContextProvider>
 
  );
}

export default App
