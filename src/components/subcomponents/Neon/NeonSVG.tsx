import { motion } from "framer-motion";
import { NeonSVGProps } from "@interfaces";
export const NeonSVG = ({ src, color }: NeonSVGProps) => {
  return (
    <>
      <motion.img
        src={src}
        className="w-24 mx-auto mb-8"
        style={{ filter: `drop-shadow(0 0 10px ${color})` }}
        animate={{ filter: `drop-shadow(0 0 20px ${color})` }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
      />
    </>
  );
};
