
import AppName from './component/AppName'
import AddTodo from './component/Addtodo'
import TodoItems from './component/TodoItems'
import {TodoItemProvider} from './store/TodoContext'

function App() {

  return (
      <TodoItemProvider>
        <center>
          <AppName />
          <AddTodo />
          <TodoItems />
        </center>
      </TodoItemProvider>
 
  );
}

export default App
