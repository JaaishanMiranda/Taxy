"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

/** Every motion animation on the page follows the visitor's reduced-motion setting. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
