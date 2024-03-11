import {
  fontSizeScale,
  percentBaseHeight,
  percentBaseWidth,
} from 'react-native-dimensions-util';

// Screen size defined in your Figma design
const FIGMA_WINDOW_WIDTH = 375;
const FIGMA_WINDOW_HEIGHT = 812;

// function that adjusts the width based on the size of the Figma window
export function widthPercentage(width: number): number {
  const percentage = (width / FIGMA_WINDOW_WIDTH) * 100;

  return percentBaseWidth(percentage);
}

//  function that adjusts the height based on the size of the Figma window
export function heightPercentage(height: number): number {
  const percentage = (height / FIGMA_WINDOW_HEIGHT) * 100;

  return percentBaseHeight(percentage);
}

// ffunction to adjust font size based on Figma window size
export function fontPercentage(size: number): number {
  const percentage = size * 0.135;

  return fontSizeScale(percentage);
}
