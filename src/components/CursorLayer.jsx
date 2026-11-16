import React, { useEffect, useState } from 'react';
import { GhostCursor } from './GhostCursor';
import { useCursorPaths } from '../hooks/useCursorPaths';

/**
 * CursorLayer - Manages global collaborative cursor clusters across viewport
 */
export const CursorLayer = ({ count = 6, mode = 'drift', targetSection = null }) => {
  const { generatePath, getPresetRoles } = useCursorPaths();
  const [cursorList, setCursorList] = useState([]);

  useEffect(() => {
    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCursorList([]);
      return;
    }

    const roles = getPresetRoles();
    const isMobile = window.innerWidth < 768;
    const effectiveCount = isMobile ? Math.min(3, count) : count;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const list = Array.from({ length: effectiveCount }).map((_, i) => {
      const role = roles[i % roles.length];
      const startX = Math.random() > 0.5 ? -40 : w + 40;
      const startY = Math.random() * h;
      const targetX = w * 0.15 + Math.random() * (w * 0.7);
      const targetY = h * 0.2 + Math.random() * (h * 0.6);

      return {
        id: `cursor-${i}-${Date.now()}`,
        color: role.color,
        label: role.label,
        path: generatePath(startX, startY, targetX, targetY),
        delay: i * 0.25,
        duration: 3.5 + Math.random() * 2,
        isClicking: Math.random() > 0.4
      };
    });

    setCursorList(list);
  }, [count, mode, targetSection]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {cursorList.map(c => (
        <GhostCursor
          key={c.id}
          color={c.color}
          label={c.label}
          path={c.path}
          delay={c.delay}
          duration={c.duration}
          isClicking={c.isClicking}
        />
      ))}
    </div>
  );
};

export default CursorLayer;

