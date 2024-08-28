"use client";

import "./styles.css";
import React from "react";
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import { TypographyBody } from "../components/typography";
import { Motion } from "@/components/motion";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

const materials = ["Titânio", "Aço Cirúrgico", "Ouro", "Prata 925"];

const duplicated = [
  ...materials,
  ...materials,
  ...materials,
  ...materials,
  ...materials,
  ...materials,
  ...materials,
  ...materials,
];

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1320], [0, 5], {
    clamp: false,
  });

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(baseX, (v) => `${wrap(-25.3, -38, v)}%`);

  useAnimationFrame((_, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */

    moveBy += moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <Motion
        className="scroller"
        style={{
          x,
          fontSize: 20,
        }}
      >
        {children}
      </Motion>
    </div>
  );
}

export const Materials = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 100,
        color: "white",
        position: "relative",
        overflow: "hidden",
        background: "var(--primary)",
      }}
    >
      <ParallaxText baseVelocity={-5}>
        {duplicated.map((material, index) => (
          <TypographyBody
            key={`material-${material}-${index}`}
            style={{
              fontWeight: 300,
            }}
          >
            {material}
          </TypographyBody>
        ))}
      </ParallaxText>
    </section>
  );
};
