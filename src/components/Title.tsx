import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {fadeIn, slideIn} from '../design-system/animations';

interface TitleProps {
  text: string;
  subtitle?: string;
  startFrame?: number;
  y?: number;
}

/**
 * Reusable Title component for topic headers
 */
export const Title: React.FC<TitleProps> = ({
  text,
  subtitle,
  startFrame = 0,
  y = 100,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 25);
  const slideStyle = slideIn(frame, startFrame, 30, 'left', 50);

  return (
    <div
      style={{
        position: 'absolute',
        top: y,
        left: 80,
        opacity,
        ...slideStyle,
      }}
    >
      <h1
        style={{
          margin: 0,
          color: theme.text.primary,
          fontSize: theme.typography.title.fontSize,
          fontWeight: theme.typography.title.fontWeight,
          fontFamily: theme.typography.title.fontFamily,
          textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
        }}
      >
        {text}
      </h1>
      {subtitle && (
        <p
          style={{
            margin: '16px 0 0 0',
            color: theme.text.secondary,
            fontSize: theme.typography.subheading.fontSize,
            fontWeight: theme.typography.subheading.fontWeight,
            fontFamily: theme.typography.subheading.fontFamily,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
