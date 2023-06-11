// https://github.com/type-challenges/type-challenges/blob/main/questions/00004-easy-pick/README.ja.md

{
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyPick<T, S extends keyof T> = {
    [k in S]: T[k];
  };

  type TodoPreview = MyPick<Todo, 'title' | 'completed'>;

  const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
  };
}
