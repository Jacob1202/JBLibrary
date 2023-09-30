import { useTheme } from "next-themes";
import { motion } from "framer-motion";

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    tranisiton: { duration: 3 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

export default function Logo() {
  const { theme } = useTheme();
  return (
    <motion.svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <g clip-path="url(#clip0_1733_2)">
        <motion.path
          d="M7 0H22L16.5 20H0.5V24H19L22 14L24 6.5"
          stroke={theme === "dark" ? "white" : "black"}
          variants={pathVariants}
        />
      </g>
      <defs>
        <clipPath id="clip0_1733_2">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
}
