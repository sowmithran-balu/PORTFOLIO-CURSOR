import React from 'react';
import { motion } from 'framer-motion';

/**
 * GhostCursor - Represents a collaborative Figma-style multiplayer cursor
 * @param {string} color - Hex or CSS color
 * @param {string} label - Team role tag (e.g., "Dev", "Design", "Copy")
 * @param {Array} path - Array of keyframe points [{x, y, rotate?, scale?}]
 * @param {number} delay - Animation delay in seconds
 * @param {number} duration - Animation duration in seconds
 * @param {boolean} isClicking - Whether cursor triggers click ripple
 */
export const GhostCursor = ({
  color = '#e32b3c',
  label = 'Dev',
  path = [],
  delay = 0,
  duration = 4,
  isClicking = false,
  style = {}
}) => {
  return (
    <motion.div
      className="fixed pointer-events-none z-50 select-none"
      style={{
        left: 0,
        top: 0,
        willChange: 'transform',
        ...style
      }}
      initial={path[0] || { x: -50, y: -50, opacity: 0 }}
      animate={{
        x: path.map(p => p.x),
        y: path.map(p => p.y),
        rotate: path.map(p => p.rotate ?? 0),
        scale: isClicking ? [1, 0.85, 1.1, 1] : 1,
        opacity: [0, 1, 1, 1, 0.8]
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
        repeat: Infinity,
        repeatType: 'reverse'
      }}
    >
      {/* SVG Arrow Pointer */}
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill={color}
        className="filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
      >
        <path
          d="M3 3L10.5 21L13.5 13.5L21 10.5L3 3Z"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>

      {/* Tiny Collaborator Tag */}
      {label && (
        <div
          className="absolute left-4 top-3.5 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold text-white whitespace-nowrap shadow-lg flex items-center gap-1"
          style={{
            backgroundColor: color,
            boxShadow: `0 2px 10px ${color}66`
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white opacity-80" />
          <span>{label}</span>
        </div>
      )}

      {/* Click Ripple Effect */}
      {isClicking && (
        <motion.span
          className="absolute -top-2 -left-2 w-8 h-8 rounded-full border"
          style={{ borderColor: color }}
          initial={{ scale: 0.2, opacity: 1 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
        />
      )}
    </motion.div>
  );
};

export default GhostCursor;

