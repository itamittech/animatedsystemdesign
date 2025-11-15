import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {fadeIn, slideIn} from '../design-system/animations';

interface DialogueProps {
  speaker: 'junior' | 'architect';
  text: string;
  x: number;
  y: number;
  startFrame?: number;
  maxWidth?: number;
}

/**
 * Speech bubble component for character dialogue
 */
export const Dialogue: React.FC<DialogueProps> = ({
  speaker,
  text,
  x,
  y,
  startFrame = 0,
  maxWidth = 600,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 15);
  const slideStyle = slideIn(
    frame,
    startFrame,
    20,
    speaker === 'junior' ? 'left' : 'right',
    30
  );

  const isJunior = speaker === 'junior';
  const bubbleColor = isJunior ? theme.colors.client : theme.colors.loadBalancer;
  const tailDirection = isJunior ? 'left' : 'right';

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        maxWidth,
        opacity,
        ...slideStyle,
      }}
    >
      <div
        style={{
          backgroundColor: theme.background.card,
          padding: '20px 24px',
          borderRadius: theme.borderRadius.lg,
          border: `3px solid ${bubbleColor}`,
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
          position: 'relative',
        }}
      >
        {/* Speech bubble tail */}
        <div
          style={{
            position: 'absolute',
            top: -3,
            [tailDirection]: -15,
            width: 0,
            height: 0,
            borderLeft: tailDirection === 'right' ? '15px solid transparent' : 'none',
            borderRight: tailDirection === 'left' ? '15px solid transparent' : 'none',
            borderTop: `15px solid ${bubbleColor}`,
          }}
        />

        {/* Speaker indicator */}
        <div
          style={{
            color: bubbleColor,
            fontSize: 16,
            fontWeight: 'bold',
            fontFamily: theme.typography.label.fontFamily,
            marginBottom: 8,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {isJunior ? 'Alex (Junior Dev)' : 'Sarah (Architect)'}
        </div>

        {/* Dialogue text */}
        <div
          style={{
            color: theme.text.primary,
            fontSize: 24,
            lineHeight: 1.6,
            fontFamily: theme.typography.body.fontFamily,
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
