import {TodoContextReducerProvider} from './store/todo-Context-Reducer'
import AppName from './component/AppName'
import Addtodo from './component/Addtodo'
import TodoItems from './component/TodoItems'

function App() {
 
  return (
    <TodoContextReducerProvider>
      <center>  
        <AppName />
        <Addtodo />
        <TodoItems />
      </center>
    </TodoContextReducerProvider>
    
  )
}

export default App
