"use client";

import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  styles?: {
    button: CSSProperties;
    motion: CSSProperties;
  };
}

export const Button = ({
  variant,
  size,
  children,
  styles,
  ...rest
}: ButtonProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={styles?.motion}
    >
      <button
        className={`button ${variant} ${size}`}
        {...rest}
        style={styles?.button}
      >
        {children}
      </button>
    </motion.a>
  );
};
