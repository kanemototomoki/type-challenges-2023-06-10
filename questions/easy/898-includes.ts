// https://github.com/type-challenges/type-challenges/blob/main/questions/00898-easy-includes/README.ja.md

{
  
  type Includes<T extends Array<unknown>, S extends string> = S extends T[number] ? true : false
  type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'>; // expected to be `false`
}
