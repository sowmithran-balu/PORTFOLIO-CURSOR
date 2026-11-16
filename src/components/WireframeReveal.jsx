import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * WireframeReveal - Figma-style wireframe inspection outline and reveal wrapper
 */
export const WireframeReveal = ({
  children,
  sectionId = '',
  dimensionLabel = '1280 x 720 [Hug]',
  className = '',
  once = true
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.28, once });

  return (
    <div ref={ref} id={sectionId} className={`relative ${className}`}>
      
      {/* Figma Selection Wireframe Overlay (dissolves when revealed) */}
      <motion.div
        className="absolute -inset-2 pointer-events-none z-30 border border-blue-500/60 rounded-xl"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={
          isInView
            ? { opacity: [0, 1, 1, 0], scale: [0.98, 1, 1.01, 1] }
            : { opacity: 0 }
        }
        transition={{ duration: 1.8, times: [0, 0.2, 0.8, 1], ease: 'easeInOut' }}
      >
        {/* 4 Corner Selection Resize Handles */}
        <span className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-white border border-blue-600 rounded-sm" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white border border-blue-600 rounded-sm" />
        <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-white border border-blue-600 rounded-sm" />
        <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-white border border-blue-600 rounded-sm" />

        {/* Figma Dimension / Inspection Tag */}
        <div className="absolute -top-6 left-3 px-2 py-0.5 rounded bg-blue-600 text-[10px] font-mono text-white font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
          <span>{dimensionLabel}</span>
        </div>
      </motion.div>

      {/* Main Content Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        {children}
      </motion.div>

    </div>
  );
};

export default WireframeReveal;

