 import TodoItem from "./TodoItem";

  const TodoItems = () => {
    const todoItem = [
      { id: 1, todoText: 'Buy Milk', todoDate: '12/17/2025 09:08 PM' },
      { id: 2, todoText: 'Buy Milks', todoDate: '12/17/2025 09:08 PM' },
      { id: 3, todoText: 'Buy Milksa', todoDate: '12/17/2025 09:08 PM' },
      { id: 4, todoText: 'Buy Milkd', todoDate: '12/17/2025 09:08 PM' },
    ];
    return (
        todoItem.map((item) => <TodoItem key={item.id} keyId={item.id } todoText={item.todoText} todoDate={item.todoDate} />)
    );
  }

  export default TodoItems;