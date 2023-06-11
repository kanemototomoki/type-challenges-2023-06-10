// https://github.com/type-challenges/type-challenges/blob/main/questions/00003-medium-omit/README.ja.md

{
  interface Todo {
    title: string;
    description: string;
    completed: boolean;
  }

  type MyOmit<T, S extends keyof T> = {
    [k in keyof T as k extends S ? never : k]: T[k];
  };

  type TodoPreview = MyOmit<Todo, 'description' | 'title'>;

  const todo: TodoPreview = {
    completed: false,
  };
}
