// https://github.com/type-challenges/type-challenges/blob/main/questions/00268-easy-if/README.ja.md

{
  type If<T extends Boolean, Y, N> = T extends true ? Y : N;
  type A = If<true, 'a', 'b'>; // expected to be 'a'
  type B = If<false, 'a', 'b'>; // expected to be 'b'
}
