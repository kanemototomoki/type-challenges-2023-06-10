// https://github.com/type-challenges/type-challenges/blob/main/questions/00010-medium-tuple-to-union/README.ja.md

{
  type Arr = ['1', '2', '3'];

  type TupleToUnion<T extends Array<unknown>> = T[number]
  type Test = TupleToUnion<Arr>; // expected to be '1' | '2' | '3'
}
