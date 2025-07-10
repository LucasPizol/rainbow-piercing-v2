"use client";

import { event, type Event } from "@/analytics";
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
  href?: string;
  eventProps?: Event;
}

export const Button = ({
  variant,
  size,
  children,
  styles,
  href,
  eventProps,
  ...rest
}: ButtonProps) => {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      style={{
        textDecoration: "none",
        ...styles?.motion,
      }}
      href={href}
      target="_blank"
    >
      <button
        className={`button ${variant} ${size}`}
        {...rest}
        style={styles?.button}
        onClick={(ev) => {
          const label =
            eventProps?.label || (typeof children === "string" ? children : "");

          if (label) {
            event({
              action: "click",
              category: "cta_button",
              label: label,
            });
          }

          rest.onClick?.(ev);
        }}
      >
        {children}
      </button>
    </motion.a>
  );
};
