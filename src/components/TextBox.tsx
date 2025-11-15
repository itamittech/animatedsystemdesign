import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {fadeIn, slideIn} from '../design-system/animations';

interface TextBoxProps {
  x: number;
  y: number;
  width: number;
  title: string;
  points: string[];
  startFrame?: number;
}

/**
 * Reusable TextBox component for displaying key points and explanations
 */
export const TextBox: React.FC<TextBoxProps> = ({
  x,
  y,
  width,
  title,
  points,
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 20);
  const slideStyle = slideIn(frame, startFrame, 25, 'right', 30);

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        width: width,
        opacity,
        ...slideStyle,
      }}
    >
      {/* Title */}
      <div
        style={{
          backgroundColor: theme.background.card,
          padding: theme.spacing.md,
          borderRadius: theme.borderRadius.lg,
          borderLeft: `4px solid ${theme.colors.info}`,
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
        }}
      >
        <h3
          style={{
            margin: 0,
            marginBottom: theme.spacing.sm,
            color: theme.text.primary,
            fontSize: theme.typography.heading.fontSize,
            fontWeight: theme.typography.heading.fontWeight,
            fontFamily: theme.typography.heading.fontFamily,
          }}
        >
          {title}
        </h3>

        {/* Points */}
        <ul
          style={{
            margin: 0,
            padding: '0 0 0 24px',
            listStyle: 'none',
          }}
        >
          {points.map((point, index) => {
            const pointOpacity = fadeIn(
              frame,
              startFrame + 20 + index * 10,
              15
            );
            return (
              <li
                key={index}
                style={{
                  marginBottom: theme.spacing.sm,
                  color: theme.text.secondary,
                  fontSize: theme.typography.body.fontSize,
                  fontFamily: theme.typography.body.fontFamily,
                  lineHeight: 1.6,
                  opacity: pointOpacity,
                  display: 'flex',
                  alignItems: 'flex-start',
                }}
              >
                <span
                  style={{
                    color: theme.colors.info,
                    marginRight: theme.spacing.sm,
                    fontSize: 24,
                  }}
                >
                  •
                </span>
                <span style={{flex: 1}}>{point}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
