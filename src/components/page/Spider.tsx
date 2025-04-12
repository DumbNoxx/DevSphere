import { useCanvasRef } from "@hooks";

export const Spider = () => {
  const { canvasRef } = useCanvasRef();
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};
