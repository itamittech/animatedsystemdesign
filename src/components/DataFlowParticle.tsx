import React from 'react';
import {useCurrentFrame} from 'remotion';
import {interpolate, Easing} from 'remotion';

interface DataFlowParticleProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  startFrame: number;
  duration?: number;
  color?: string;
  delay?: number;
}

/**
 * Animated particle that flows from point A to point B
 */
export const DataFlowParticle: React.FC<DataFlowParticleProps> = ({
  x1,
  y1,
  x2,
  y2,
  startFrame,
  duration = 40,
  color = '#60a5fa',
  delay = 0,
}) => {
  const frame = useCurrentFrame();
  const actualStartFrame = startFrame + delay;

  if (frame < actualStartFrame || frame > actualStartFrame + duration) {
    return null;
  }

  const progress = interpolate(
    frame,
    [actualStartFrame, actualStartFrame + duration],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: Easing.inOut(Easing.ease),
    }
  );

  const x = x1 + (x2 - x1) * progress;
  const y = y1 + (y2 - y1) * progress;

  // Fade in and out
  const opacity = interpolate(progress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <circle
      cx={x}
      cy={y}
      r={6}
      fill={color}
      opacity={opacity}
      filter="url(#glow)"
    />
  );
};

/**
 * Multiple particles flowing along a path
 */
export const DataFlowStream: React.FC<{
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  startFrame: number;
  color?: string;
  particleCount?: number;
}> = ({x1, y1, x2, y2, startFrame, color = '#60a5fa', particleCount = 5}) => {
  return (
    <>
      {/* SVG Filter for glow effect */}
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Generate multiple particles with delays */}
      {Array.from({length: particleCount}).map((_, i) => (
        <DataFlowParticle
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          startFrame={startFrame}
          delay={i * 8}
          color={color}
        />
      ))}
    </>
  );
};
