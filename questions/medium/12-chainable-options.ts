// https://github.com/type-challenges/type-challenges/blob/main/questions/00012-medium-chainable-options/README.ja.md

declare const config: Chainable;
type Chainable<T = {}> = {
  option: <K extends string, V>(
    key: K,
    value: V
  ) => Chainable<Omit<T, K> & Record<K, V>>;
  get: () => T;
};
{
  const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get();

  // expect the type of result to be:
  interface Result {
    foo: number;
    name: string;
    bar: {
      value: string;
    };
  }
}
