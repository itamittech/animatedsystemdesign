import React from 'react';
import {useCurrentFrame} from 'remotion';
import {theme} from '../design-system/theme';
import {fadeIn, scale} from '../design-system/animations';

interface CharacterProps {
  type: 'junior' | 'architect';
  x: number;
  y: number;
  startFrame?: number;
  size?: number;
}

/**
 * Character component representing Junior Dev or Architect
 */
export const Character: React.FC<CharacterProps> = ({
  type,
  x,
  y,
  startFrame = 0,
  size = 120,
}) => {
  const frame = useCurrentFrame();
  const opacity = fadeIn(frame, startFrame, 20);
  const scaleValue = scale(frame, startFrame, 25, 0, 1);

  const isJunior = type === 'junior';

  const characterConfig = isJunior
    ? {
        color: theme.colors.client,
        avatar: '👨‍💻',
        name: 'Alex',
        title: 'Junior Developer',
        nameColor: theme.colors.client,
      }
    : {
        color: theme.colors.loadBalancer,
        avatar: '👩‍💼',
        name: 'Sarah',
        title: 'Solutions Architect',
        nameColor: theme.colors.loadBalancer,
      };

  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        opacity,
        transform: `scale(${scaleValue})`,
        transformOrigin: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Avatar Circle */}
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          backgroundColor: characterConfig.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: size * 0.6,
          border: `4px solid ${theme.background.secondary}`,
          boxShadow: '0 8px 16px rgba(0, 0, 0, 0.4)',
        }}
      >
        {characterConfig.avatar}
      </div>

      {/* Name Badge */}
      <div
        style={{
          marginTop: 12,
          backgroundColor: theme.background.card,
          padding: '8px 16px',
          borderRadius: theme.borderRadius.md,
          border: `2px solid ${characterConfig.nameColor}`,
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
        }}
      >
        <div
          style={{
            color: theme.text.primary,
            fontSize: 20,
            fontWeight: 'bold',
            fontFamily: theme.typography.label.fontFamily,
            textAlign: 'center',
          }}
        >
          {characterConfig.name}
        </div>
        <div
          style={{
            color: theme.text.muted,
            fontSize: 14,
            fontFamily: theme.typography.label.fontFamily,
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          {characterConfig.title}
        </div>
      </div>
    </div>
  );
};
