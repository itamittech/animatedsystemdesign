import React from 'react';
import {Audio} from 'remotion';
import {volumePresets} from '../utils/audio';

interface SoundEffectProps {
  src: string;
  startFrom?: number;
  volume?: number;
  playbackRate?: number;
}

/**
 * Sound effect component that plays at a specific frame
 * Gracefully handles missing audio files
 */
export const SoundEffect: React.FC<SoundEffectProps> = ({
  src,
  startFrom = 0,
  volume = volumePresets.ui,
  playbackRate = 1,
}) => {
  // Only render if audio path is provided
  if (!src) return null;

  try {
    return (
      <Audio
        src={src}
        startFrom={startFrom}
        volume={volume}
        playbackRate={playbackRate}
      />
    );
  } catch (error) {
    // Silently fail if audio file doesn't exist
    console.warn(`Audio file not found: ${src}`);
    return null;
  }
};

/**
 * Looping background music component
 */
export const BackgroundMusic: React.FC<{
  src: string;
  volume?: number;
}> = ({src, volume = volumePresets.background}) => {
  if (!src) return null;

  try {
    return (
      <Audio
        src={src}
        volume={volume}
        loop
      />
    );
  } catch (error) {
    console.warn(`Background music not found: ${src}`);
    return null;
  }
};
