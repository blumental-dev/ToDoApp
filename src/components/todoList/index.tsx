import { Todo } from "../../constants";
import ToDoListItem from "../todoListItem";

type ToDoListProps = {
  todos: Todo[];
  onTodoClick: any;
};

export default function ToDoList({ todos, onTodoClick }: ToDoListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <ToDoListItem key={todo.id} item={todo} onClick={onTodoClick} />
      ))}
    </ul>
  );
}
