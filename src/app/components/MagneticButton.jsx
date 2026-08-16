"use client";
import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

/**
 * A button/link that gently pulls toward the cursor and tilts in 3D,
 * with a light-sweep shine on hover. Renders as an anchor tag so it
 * works for mailto:, hash, and external links alike.
 */
const MagneticButton = ({
  href,
  children,
  className = "",
  strength = 0.35,
  onClick,
  external = false,
  as: As = motion.a,
}) => {
  const ref = useRef(null);

  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.4 });
  const rotateX = useSpring(0, { stiffness: 150, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 18 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px * strength);
    y.set(py * strength);
    rotateX.set((py / rect.height) * -14);
    rotateY.set((px / rect.width) * 14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <As
      ref={ref}
      href={href}
      onClick={onClick}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x, y, rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileTap={{ scale: 0.93 }}
      className={`group relative inline-flex items-center justify-center overflow-hidden [perspective:600px] ${className}`}
    >
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full" />
      <span
        className="relative z-10 flex items-center gap-2"
        style={{ transform: "translateZ(24px)" }}
      >
        {children}
      </span>
    </As>
  );
};

export default MagneticButton;
