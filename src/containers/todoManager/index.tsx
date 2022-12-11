import React, { InputHTMLAttributes, useState } from "react";
import TodoList from "../../components/todoList";
import { Todo } from "../../constants";

const TodoListManager: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      text: "Item 1",
      completed: false,
      children: [
        {
          id: 2,
          text: "Item 1.1",
          completed: false,
          children: [
            {
              id: 3,
              text: "Item 1.1.1",
              completed: false,
            },
            {
              id: 4,
              text: "Item 1.1.2",
              completed: false,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      text: "Item 2",
      completed: false,
    },
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
