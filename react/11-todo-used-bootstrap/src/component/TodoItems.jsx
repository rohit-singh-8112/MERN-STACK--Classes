 import TodoItem from "./TodoItem";

  const TodoItems = ({todoItem}) => {
   
    return (
        todoItem.map(item => <TodoItem key={item.id} keyId={item.id} todoText={item.todoText} todoDate={item.todoDate} /> )
    );
  }

  export default TodoItems;