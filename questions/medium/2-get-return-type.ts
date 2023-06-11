// https://github.com/type-challenges/type-challenges/blob/main/questions/00002-medium-return-type/README.ja.md

{
  const fn = (v: boolean) => {
    if (v) return 1;
    else return 2;
  };

  type MyReturnType<T extends (arg: boolean) => number> = T extends (
    arg: boolean
  ) => infer S
    ? S
    : never;
  type a = MyReturnType<typeof fn>; // should be "1 | 2"
}
