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
  endFrame?: number;
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
  endFrame,
  maxWidth = 600,
}) => {
  const frame = useCurrentFrame();

  // Don't render if past endFrame or before startFrame
  if (endFrame && frame > endFrame) {
    return null;
  }

  // Calculate opacity - only fade in, NO fade out
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
          backgroundColor: 'rgba(20, 25, 45, 0.98)',
          padding: '22px 26px',
          borderRadius: theme.borderRadius.lg,
          border: `4px solid ${bubbleColor}`,
          boxShadow: `0 12px 32px rgba(0, 0, 0, 0.6), 0 0 20px ${bubbleColor}40, inset 0 1px 0 rgba(255, 255, 255, 0.1)`,
          position: 'relative',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* Speech bubble tail */}
        <div
          style={{
            position: 'absolute',
            top: -4,
            [tailDirection]: -16,
            width: 0,
            height: 0,
            borderLeft: tailDirection === 'right' ? '16px solid transparent' : 'none',
            borderRight: tailDirection === 'left' ? '16px solid transparent' : 'none',
            borderTop: `16px solid ${bubbleColor}`,
            filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
          }}
        />

        {/* Speaker indicator */}
        <div
          style={{
            color: bubbleColor,
            fontSize: 22,
            fontWeight: 'bold',
            fontFamily: theme.typography.label.fontFamily,
            marginBottom: 10,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            textShadow: `0 0 12px ${bubbleColor}, 0 2px 4px rgba(0,0,0,0.5)`,
          }}
        >
          {isJunior ? 'Alex (Junior Dev)' : 'Sarah (Architect)'}
        </div>

        {/* Dialogue text - innovative styling for clarity */}
        <div
          style={{
            color: '#ffffff',
            fontSize: 30,
            lineHeight: 1.7,
            fontFamily: theme.typography.body.fontFamily,
            fontWeight: '500',
            textShadow: '0 0 8px rgba(96, 165, 250, 0.3), 0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 16px rgba(0, 0, 0, 0.4)',
            WebkitFontSmoothing: 'antialiased',
            textRendering: 'optimizeLegibility',
            letterSpacing: '0.3px',
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};
