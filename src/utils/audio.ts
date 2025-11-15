/**
 * Audio/Sound Effects utilities
 *
 * Sound effect files should be placed in /public/audio/
 * Free sound effects can be downloaded from:
 * - https://freesound.org/
 * - https://mixkit.co/free-sound-effects/
 * - https://www.zapsplat.com/
 */

export const soundEffects = {
  // UI Sounds
  whoosh: '/audio/whoosh.mp3',
  pop: '/audio/pop.mp3',
  click: '/audio/click.mp3',

  // Data flow
  dataFlow: '/audio/data-flow.mp3',

  // System sounds
  serverStart: '/audio/server-start.mp3',
  serverError: '/audio/error.mp3',
  serverSuccess: '/audio/success.mp3',

  // Alerts
  warning: '/audio/warning.mp3',
  alert: '/audio/alert.mp3',

  // Transitions
  sceneTransition: '/audio/transition.mp3',

  // Background (optional)
  backgroundMusic: '/audio/background.mp3',
};

/**
 * Helper to check if audio file exists
 */
export const hasAudio = (audioPath: string): boolean => {
  // In production, you might want to check if file exists
  // For now, return true and handle errors gracefully in components
  return true;
};

/**
 * Volume presets for different sound types
 */
export const volumePresets = {
  background: 0.1,    // Very subtle
  ui: 0.3,            // UI feedback
  emphasis: 0.5,      // Important moments
  alert: 0.6,         // Warnings/errors
};
