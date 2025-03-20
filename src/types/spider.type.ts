export type Spider = {
  follow: (x: number, y: number) => void;
  tick: (t: number) => void;
};
