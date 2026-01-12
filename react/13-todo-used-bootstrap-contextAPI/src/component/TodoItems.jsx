 import TodoItem from "./TodoItem";

  const TodoItems = ({todoItem, deleteTodoElement}) => {
   
    return (
        todoItem.map(item => <TodoItem key={item.id} keyId={item.id} todoText={item.todoText} todoDate={item.todoDate} deleteTodoElement={deleteTodoElement} /> )
    );
  }

  export default TodoItems;