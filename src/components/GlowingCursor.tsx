import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function GlowingCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Motion values for high performance
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Springs for smooth fluid trace
  const springConfig = { damping: 25, stiffness: 220, mass: 0.8 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect if physical screen is touch-first to avoid overlay clutter
    const checkTouch = () => {
      if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0
      ) {
        setIsTouchDevice(true);
      }
    };
    
    checkTouch();

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    // Listen for hover states on triggers
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === "BUTTON" ||
          target.tagName === "A" ||
          target.closest(".interactive-hover") ||
          target.onclick ||
          target.closest("button") ||
          target.closest("a"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer soft glowing aura */}
      <motion.div
        id="glowing-cursor-aura"
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          background: isHovered
            ? "radial-gradient(circle, rgba(255,46,147,0.4) 0%, rgba(255,46,147,0) 80%)"
            : "radial-gradient(circle, rgba(219,255,0,0.3) 0%, rgba(219,255,0,0) 80%)",
          scale: isHovered ? 4 : 2,
        }}
        animate={{
          transition: { type: "tween", ease: "backOut", duration: 0.2 },
        }}
      />

      {/* Sharp laser dot */}
      <motion.div
        id="glowing-cursor-dot"
        className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.8 : 1,
          backgroundColor: isHovered ? "#ff2e93" : "#dbff00",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
}
