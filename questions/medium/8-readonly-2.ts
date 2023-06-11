// https://github.com/type-challenges/type-challenges/blob/main/questions/00008-medium-readonly-2/README.ja.md

{
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyReadonly2<T, S extends keyof T = keyof T> = Omit<Todo, S> &
    Readonly<Pick<T, S>>;

  const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: 'Hey',
    description: 'foobar',
    completed: false,
  };

  todo.title = 'Hello'; // Error: cannot reassign a readonly property
  todo.description = 'barFoo'; // Error: cannot reassign a readonly property
  todo.completed = true; // OK
}
