// https://github.com/type-challenges/type-challenges/blob/main/questions/00016-medium-pop/README.ja.md

{
  type arr1 = ['a', 'b', 'c', 'd'];
  type arr2 = [3, 2, 1];

  type Pop<T extends Array<unknown>> = T extends [
    ...infer R,
    infer Last
  ]
    ? R
    : never;

  type re1 = Pop<arr1>; // expected to be ['a', 'b', 'c']
  type re2 = Pop<arr2>; // expected to be [3, 2]
}
