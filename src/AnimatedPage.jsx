import { motion } from "framer-motion";

export const AnimatedPage = ({ children }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        y: -20,
        scale: 0.98,
      }}
      transition={{
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        type: "tween",
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};
