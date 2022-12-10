import React, { InputHTMLAttributes, useState } from "react";
import TodoList from "../../components/todoList";
import { Todo } from "../../constants";

const TodoListManager: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy milk", completed: false },
    { id: 2, text: "Do laundry", completed: true },
    { id: 3, text: "Finish homework", completed: false },
  ]);

  const addTodo = (text: string) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const eventTarget = event.target as HTMLFormElement;
          const [inputElement] = eventTarget.elements;

          const todoText = (inputElement as HTMLInputElement).value;

          if (todoText) {
            addTodo(todoText);
          }
        }}
      >
        <input type="text" name="todoText" />
        <button type="submit">Add Todo</button>
      </form>
      <TodoList todos={todos} onTodoClick={toggleTodo} />
    </div>
  );
};

export default TodoListManager;
