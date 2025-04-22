import { motion } from "framer-motion";
import { NeonSVGProps } from "@interfaces";
export const NeonSVG = ({ src, color, className = "" }: NeonSVGProps) => {
  return (
    <>
      <motion.img
        src={src}
        className={className}
        style={{ filter: `drop-shadow(0 0 10px ${color})` }}
        animate={{ filter: `drop-shadow(0 0 20px ${color})` }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      />
    </>
  );
};
