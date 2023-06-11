// https://github.com/type-challenges/type-challenges/blob/main/questions/00020-medium-promise-all/README.ja.md

declare function PromiseAll<T extends any[]>(
  values: readonly [...T]
): Promise<{
  [key in keyof T]: Awaited<T[key]>;
}>; 

{
  const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise<string>((resolve, reject) => {
    setTimeout(resolve, 100, 'foo');
  });

  // expected to be `Promise<[number, 42, string]>`
  const p = PromiseAll([promise1, promise2, promise3] as const);
}
