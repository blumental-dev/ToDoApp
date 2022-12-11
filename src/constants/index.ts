export type Todo = {
  id: number;
  index?: number;
  text: string;
  completed: boolean;
  children?: Todo[];
};
