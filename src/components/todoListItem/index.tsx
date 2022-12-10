import { Todo } from "../../constants";

type todoListItemProps = {
  item: Todo;
  onClick: any;
};

export default function ToDoListItem({ item, onClick }: todoListItemProps) {
  return (
    <li
      onClick={() => onClick(item.id)}
      style={{
        textDecoration: item.completed ? "line-through" : "none",
      }}
    >
      {item.text}
    </li>
  );
}
