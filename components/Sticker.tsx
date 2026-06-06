"use client";
import { motion } from "framer-motion";

interface StickerProps {
  emoji: string;
  rotate?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Sticker({
  emoji,
  rotate = 6,
  delay = 0,
  className = "",
  style = {},
}: StickerProps) {
  return (
    <motion.div
      className={className}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        border: "3px solid #780000",
        boxShadow: "4px 4px 0 #780000",
        padding: "8px 12px",
        fontSize: 28,
        lineHeight: 1,
        pointerEvents: "none",
        rotate: `${rotate}deg`,
        ...style,
      }}
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 3,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    >
      {emoji}
    </motion.div>
  );
}
