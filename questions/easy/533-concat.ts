// https://github.com/type-challenges/type-challenges/blob/main/questions/00533-easy-concat/README.ja.md

{
  type Concat<A1 extends Array<unknown>, A2 extends Array<unknown>> = [
    ...A1,
    ...A2
  ];
  type Result = Concat<[1], [2]>; // expected to be [1, 2]
}
