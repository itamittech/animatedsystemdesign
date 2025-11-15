import {interpolate, Easing} from 'remotion';

/**
 * Standard animation utilities for consistent motion design
 */

export const easings = {
  easeOut: Easing.bezier(0.33, 1, 0.68, 1),
  easeIn: Easing.bezier(0.32, 0, 0.67, 0),
  easeInOut: Easing.bezier(0.65, 0, 0.35, 1),
  spring: Easing.bezier(0.34, 1.56, 0.64, 1),
  smooth: Easing.bezier(0.45, 0, 0.55, 1),
};

/**
 * Fade in animation
 */
export const fadeIn = (frame: number, startFrame = 0, duration = 20) => {
  return interpolate(frame, [startFrame, startFrame + duration], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easings.easeOut,
  });
};

/**
 * Fade out animation
 */
export const fadeOut = (frame: number, startFrame: number, duration = 20) => {
  return interpolate(frame, [startFrame, startFrame + duration], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easings.easeIn,
  });
};

/**
 * Slide in from direction
 */
export const slideIn = (
  frame: number,
  startFrame = 0,
  duration = 30,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left',
  distance = 100
) => {
  const progress = interpolate(
    frame,
    [startFrame, startFrame + duration],
    [0, 1],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: easings.easeOut,
    }
  );

  const offset = (1 - progress) * distance;

  switch (direction) {
    case 'left':
      return {transform: `translateX(-${offset}px)`};
    case 'right':
      return {transform: `translateX(${offset}px)`};
    case 'top':
      return {transform: `translateY(-${offset}px)`};
    case 'bottom':
      return {transform: `translateY(${offset}px)`};
  }
};

/**
 * Scale animation
 */
export const scale = (
  frame: number,
  startFrame = 0,
  duration = 20,
  fromScale = 0,
  toScale = 1
) => {
  return interpolate(
    frame,
    [startFrame, startFrame + duration],
    [fromScale, toScale],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
      easing: easings.spring,
    }
  );
};

/**
 * Pulse animation for highlighting
 */
export const pulse = (frame: number, frequency = 30) => {
  return interpolate(frame % frequency, [0, frequency / 2, frequency], [1, 1.1, 1], {
    easing: easings.easeInOut,
  });
};

/**
 * Draw line animation (for connections)
 */
export const drawLine = (frame: number, startFrame = 0, duration = 30) => {
  return interpolate(frame, [startFrame, startFrame + duration], [0, 100], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
    easing: easings.smooth,
  });
};

/**
 * Stagger delay for multiple elements
 */
export const staggerDelay = (index: number, delayPerItem = 5) => {
  return index * delayPerItem;
};
