// https://github.com/type-challenges/type-challenges/blob/main/questions/00009-medium-deep-readonly/README.ja.md

{
  type X = {
    x: {
      a: 1;
      b: 'hi';
    };
    y: 'hey';
  };

  type Expected = {
    readonly x: {
      readonly a: 1;
      readonly b: 'hi';
    };
    readonly y: 'hey';
  };

  type DeepReadonly<T> = keyof T extends never
    ? T
    : {
        readonly [k in keyof T]: DeepReadonly<T[k]>;
      };

  type Todo = DeepReadonly<X>; // should be same as `Expected`
}
