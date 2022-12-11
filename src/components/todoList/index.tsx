import { Todo } from "../../constants";
import ToDoListItem from "../todoListItem";

type ToDoListProps = {
  todos: Todo[];
  onTodoClick: any;
};

export default function ToDoList({ todos, onTodoClick }: ToDoListProps) {
  return (
    <ul>
      {todos.map((item, index) => (
        <li
          onClick={() => {
            console.log({ item, index });

            onTodoClick(item.id);
          }}
          style={{
            textDecoration: item.completed ? "line-through" : "none",
          }}
        >
          {item.text}
          {item.children && (
            <ToDoList todos={item.children} onTodoClick={onTodoClick} />
          )}
        </li>
      ))}
    </ul>
  );
}
