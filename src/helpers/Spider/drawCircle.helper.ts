const { PI } = Math

export const drawCircle = (x: number, y: number, r: number, ctx:CanvasRenderingContext2D): void => {
  ctx.beginPath();
  ctx.ellipse(x, y, r, r, 0, 0, PI * 2);
  ctx.fill();
};