// https://github.com/type-challenges/type-challenges/blob/main/questions/03060-easy-unshift/README.ja.md

{
  type Unshift<T extends Array<unknown>, S> = [S, ...T]
  type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
}
