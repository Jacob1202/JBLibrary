import { motion, useScroll, useSpring } from "framer-motion";

export const ReadIndicator = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[8px] bg-blue-700 origin-[0%]"
    >
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
    </motion.div>
  );
};
