// https://github.com/type-challenges/type-challenges/blob/main/questions/00011-easy-tuple-to-object/README.ja.md

{
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const;

  type TupleToObject<T extends ReadonlyArray<string>> = {
    [k in T[number]]: k;
  };

  type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
}
