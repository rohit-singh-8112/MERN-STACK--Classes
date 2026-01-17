 import ListContext from "../store/TodoContext";
import TodoItem from "./TodoItem";
 import {useContext} from 'react'

const TodoItems = () => {
  const{todoItem} = useContext(ListContext);
    return (
        todoItem.map(item => <TodoItem key={item.id} keyId={item.id} todoText={item.todoText} todoDate={item.todoDate} /> )
    );
  }

  export default TodoItems;