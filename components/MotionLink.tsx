"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export function MotionLink({ className = "", children, ...props }: HTMLMotionProps<"a">) {
  return (
    <motion.a className={className} whileTap={{ scale: 0.95 }} {...props}>
      {children}
    </motion.a>
  );
}
