import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {fadeIn, scale} from '../design-system/animations';

interface BoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  label: string;
  icon?: string;
  startFrame?: number;
  subLabel?: string;
}

/**
 * Reusable Box component for representing system components
 */
export const Box: React.FC<BoxProps> = ({
  x,
  y,
  width,
  height,
  color,
  label,
  icon,
  startFrame = 0,
  subLabel,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 20);
  const scaleValue = scale(frame, startFrame, 25, 0.8, 1);

  return (
    <g
      style={{
        opacity,
        transform: `scale(${scaleValue})`,
        transformOrigin: `${x + width / 2}px ${y + height / 2}px`,
      }}
    >
      {/* Shadow */}
      <rect
        x={x + 4}
        y={y + 4}
        width={width}
        height={height}
        rx={theme.borderRadius.lg}
        fill="rgba(0, 0, 0, 0.3)"
      />

      {/* Main box */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={theme.borderRadius.lg}
        fill={color}
        stroke={lightenColor(color, 20)}
        strokeWidth={2}
      />

      {/* Icon */}
      {icon && (
        <text
          x={x + width / 2}
          y={y + (subLabel ? height / 2 - 15 : height / 2)}
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={40}
        >
          {icon}
        </text>
      )}

      {/* Label */}
      <text
        x={x + width / 2}
        y={y + (icon ? height - 35 : height / 2)}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={theme.text.primary}
        fontSize={theme.typography.label.fontSize}
        fontWeight={theme.typography.label.fontWeight}
        fontFamily={theme.typography.label.fontFamily}
      >
        {label}
      </text>

      {/* Sub-label */}
      {subLabel && (
        <text
          x={x + width / 2}
          y={y + height - 15}
          textAnchor="middle"
          dominantBaseline="middle"
          fill={theme.text.muted}
          fontSize={20}
          fontFamily={theme.typography.label.fontFamily}
        >
          {subLabel}
        </text>
      )}
    </g>
  );
};

// Utility function to lighten a color
function lightenColor(color: string, percent: number): string {
  const num = parseInt(color.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00ff) + amt;
  const B = (num & 0x0000ff) + amt;
  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}
