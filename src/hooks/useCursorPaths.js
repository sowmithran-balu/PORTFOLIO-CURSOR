/**
 * useCursorPaths - Generates organic, curved bezier-like keyframes for multiplayer cursors
 */
export const useCursorPaths = () => {
  const generatePath = (startX, startY, targetX, targetY, controlPointsCount = 3) => {
    const points = [{ x: startX, y: startY, rotate: -15 }];
    
    for (let i = 1; i <= controlPointsCount; i++) {
      const progress = i / (controlPointsCount + 1);
      const jitterX = (Math.random() - 0.5) * 120;
      const jitterY = (Math.random() - 0.5) * 90;
      
      points.push({
        x: startX + (targetX - startX) * progress + jitterX,
        y: startY + (targetY - startY) * progress + jitterY,
        rotate: (Math.random() - 0.5) * 20
      });
    }

    points.push({ x: targetX, y: targetY, rotate: 0 });
    return points;
  };

  const getPresetRoles = () => [
    { label: 'Design', color: '#ec4899' }, // Pink
    { label: 'Dev', color: '#06b6d4' },    // Cyan
    { label: 'Motion', color: '#eab308' }, // Yellow
    { label: 'Copy', color: '#10b981' },   // Green
    { label: 'Lead', color: '#e32b3c' },   // Crimson
    { label: 'Architect', color: '#a855f7'}// Purple
  ];

  return { generatePath, getPresetRoles };
};

export default useCursorPaths;

