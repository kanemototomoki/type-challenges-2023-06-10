// https://github.com/type-challenges/type-challenges/blob/main/questions/00043-easy-exclude/README.ja.md

{
  type MyExclude<T, S> = T extends S ? never : T;
  type Result = MyExclude<'a' | 'b' | 'c', 'a'>; // 'b' | 'c'
}
