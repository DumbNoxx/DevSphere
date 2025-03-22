export const many = <T>(n: number, f: (i: number) => T): T[] => {
  return [...Array(n)].map((_, i) => f(i));
};