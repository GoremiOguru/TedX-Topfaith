import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

export function useIsMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [breakpoint]);

  return isMobile;
}

interface StickyCardItemProps {
  children: React.ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
  baseTop: number;
  offsetStep: number;
  scaleStep: number;
  id?: string;
}

const StickyCardItem: React.FC<StickyCardItemProps> = ({
  children,
  index,
  total,
  progress,
  baseTop,
  offsetStep,
  scaleStep,
  id,
}) => {
  const isLast = index === total - 1;
  const start = total > 1 ? index / total : 0;
  const targetScale = isLast ? 1 : Math.max(0.84, 1 - (total - 1 - index) * scaleStep);

  const scale = useTransform(progress, [start, 1], [1, targetScale]);
  const y = useTransform(progress, [start, 1], [0, isLast ? 0 : -6 * (total - 1 - index)]);
  const shadeOpacity = useTransform(
    progress,
    [start, Math.min(1, start + 0.35)],
    [0, isLast ? 0 : 0.32]
  );

  const stickyTop = baseTop + index * offsetStep;

  return (
    <div
      id={id}
      style={{
        position: 'sticky',
        top: `${stickyTop}px`,
        zIndex: index + 1,
        perspective: '1000px',
      }}
    >
      <motion.div
        style={{
          scale,
          y,
          transformOrigin: 'top center',
          willChange: 'transform',
          position: 'relative',
          borderRadius: '1rem',
          backgroundColor: '#0A0A0F',
          boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.85), 0 16px 36px rgba(0, 0, 0, 0.78)',
        }}
      >
        {children}
        {/* Subtle depth darkening scrim as newer cards stack over this card */}
        {!isLast && (
          <motion.div
            aria-hidden="true"
            style={{
              opacity: shadeOpacity,
              position: 'absolute',
              inset: 0,
              borderRadius: 'inherit',
              background: 'linear-gradient(180deg, rgba(6, 6, 9, 0.75) 0%, rgba(6, 6, 9, 0.92) 100%)',
              pointerEvents: 'none',
              zIndex: 5,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

interface MobileStickyCardStackProps {
  items: React.ReactNode[];
  itemIds?: string[];
  baseTop?: number;
  offsetStep?: number;
  scaleStep?: number;
  gap?: string;
}

export const MobileStickyCardStack: React.FC<MobileStickyCardStackProps> = ({
  items,
  itemIds,
  baseTop = 82,
  offsetStep,
  scaleStep,
  gap = '1.35rem',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const computedOffsetStep = offsetStep ?? (items.length > 4 ? 10 : 14);
  const computedScaleStep = scaleStep ?? (items.length > 4 ? 0.022 : 0.04);

  return (
    <div
      ref={containerRef}
      className="mobile-sticky-stack-deck"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap,
        paddingBottom: '1rem',
      }}
    >
      {items.map((node, idx) => (
        <StickyCardItem
          key={itemIds?.[idx] ?? idx}
          id={itemIds?.[idx]}
          index={idx}
          total={items.length}
          progress={scrollYProgress}
          baseTop={baseTop}
          offsetStep={computedOffsetStep}
          scaleStep={computedScaleStep}
        >
          {node}
        </StickyCardItem>
      ))}
    </div>
  );
};
