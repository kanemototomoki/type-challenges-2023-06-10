// https://github.com/type-challenges/type-challenges/blob/main/questions/03057-easy-push/README.ja.md

{
  type Push<T extends Array<unknown>, S> = [...T, S]
  type Result = Push<[1, 2], '3'>; // [1, 2, '3']
}
