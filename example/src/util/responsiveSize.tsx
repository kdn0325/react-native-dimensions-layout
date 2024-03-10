import {
  fontSizeScale,
  percentBaseHeight,
  percentBaseWidth,
} from 'react-native-dimensions-util';

const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

export function widthPercentage(width: number): number {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;

  return percentBaseWidth(percentage);
}

export function heightPercentage(height: number): number {
  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;

  return percentBaseHeight(percentage);
}

export function fontPercentage(size: number): number {
  const percentage = size * 0.135;

  return fontSizeScale(percentage);
}
