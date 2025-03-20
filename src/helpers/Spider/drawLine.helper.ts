import { many } from "./many.helper";
import { lerp } from "./lerp.helper";
import { noise } from "./noise.helper";
export const drawLine = (
  x0: number,
  y0: number,
  x1: number,
  y1: number,
  ctx: CanvasRenderingContext2D
): void => {
  ctx.beginPath();
  ctx.moveTo(x0, y0);

  many(100, (i) => {
    i = (i + 1) / 100;
    let x = lerp(x0, x1, i);
    let y = lerp(y0, y1, i);
    let k = noise(x / 5 + x0, y / 5 + y0) * 2;
    ctx.lineTo(x + k, y + k);
  });

  ctx.stroke();
};
