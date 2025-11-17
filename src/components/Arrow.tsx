import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {drawLine, fadeIn} from '../design-system/animations';

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  label?: string;
  startFrame?: number;
  dashed?: boolean;
  bidirectional?: boolean;
}

/**
 * Reusable Arrow component for showing data flow and connections
 */
export const Arrow: React.FC<ArrowProps> = ({
  x1,
  y1,
  x2,
  y2,
  color = theme.colors.dataFlow,
  label,
  startFrame = 0,
  dashed = false,
  bidirectional = false,
}) => {
  const frame = useCurrentFrame();
  const drawProgress = drawLine(frame, startFrame, 30);
  const opacity = fadeIn(frame, startFrame, 15);

  // Calculate the actual endpoint based on draw progress
  const currentX2 = x1 + ((x2 - x1) * drawProgress) / 100;
  const currentY2 = y1 + ((y2 - y1) * drawProgress) / 100;

  // Calculate angle for arrowhead
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const arrowSize = 12;

  // Calculate label position (midpoint)
  const labelX = (x1 + x2) / 2;
  const labelY = (y1 + y2) / 2 - 15;

  return (
    <g style={{opacity}}>
      {/* Main line */}
      <line
        x1={x1}
        y1={y1}
        x2={currentX2}
        y2={currentY2}
        stroke={color}
        strokeWidth={3}
        strokeDasharray={dashed ? '8,4' : '0'}
        strokeLinecap="round"
      />

      {/* Arrowhead */}
      {drawProgress > 80 && (
        <>
          <polygon
            points={`
              ${x2},${y2}
              ${x2 - arrowSize * Math.cos(angle - Math.PI / 6)},${y2 - arrowSize * Math.sin(angle - Math.PI / 6)}
              ${x2 - arrowSize * Math.cos(angle + Math.PI / 6)},${y2 - arrowSize * Math.sin(angle + Math.PI / 6)}
            `}
            fill={color}
          />

          {/* Reverse arrowhead for bidirectional */}
          {bidirectional && (
            <polygon
              points={`
                ${x1},${y1}
                ${x1 + arrowSize * Math.cos(angle - Math.PI / 6)},${y1 + arrowSize * Math.sin(angle - Math.PI / 6)}
                ${x1 + arrowSize * Math.cos(angle + Math.PI / 6)},${y1 + arrowSize * Math.sin(angle + Math.PI / 6)}
              `}
              fill={color}
            />
          )}
        </>
      )}

      {/* Label */}
      {label && drawProgress > 50 && (
        <>
          {/* Label background */}
          <rect
            x={labelX - (label.length * 8)}
            y={labelY - 12}
            width={label.length * 16}
            height={28}
            rx={4}
            fill={theme.background.card}
            opacity={0.95}
          />
          {/* Label text */}
          <text
            x={labelX}
            y={labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={theme.text.secondary}
            fontSize={20}
            fontFamily={theme.typography.label.fontFamily}
          >
            {label}
          </text>
        </>
      )}
    </g>
  );
};
