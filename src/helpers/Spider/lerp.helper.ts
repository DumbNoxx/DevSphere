/**
 * Linearly interpolates between two values, `a` and `b`, based on a factor `t`.
 *
 * @param a - The starting value.
 * @param b - The ending value.
 * @param t - The interpolation factor, typically between 0 and 1.
 *            A value of 0 returns `a`, a value of 1 returns `b`, and values in between
 *            return a weighted average of `a` and `b`.
 * @returns The interpolated value.
 */
export const lerp = (a: number, b: number, t: number): number => {
  return a + (b - a) * t;
};
