import {TodoContextReducerProvider} from './store/todo-Context-Reducer'
import AppName from './component/AppName'
import Addtodo from './component/Addtodo'
import TodoItems from './component/TodoItems'
import LoadItems from './component/LoadItems'

function App() {
 
  return (
    <TodoContextReducerProvider>
      <center>  
        <AppName />
        <Addtodo />
        <LoadItems />
        <TodoItems />
      </center>
    </TodoContextReducerProvider>
    
  )
}

export default App
