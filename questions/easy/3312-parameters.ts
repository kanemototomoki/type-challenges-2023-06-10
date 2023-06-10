// https://github.com/type-challenges/type-challenges/blob/main/questions/03312-easy-parameters/README.ja.md

{
  const foo = (arg1: string, arg2: number): void => {};

  type MyParameters<T extends (...args: any[]) => any> = T extends (
    ...args: infer S
  ) => any
    ? S
    : any;
  type FunctionParamsType = MyParameters<typeof foo>; // [arg1: string, arg2: number]
}
