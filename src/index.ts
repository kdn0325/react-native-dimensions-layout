import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const isSmall = width <= 375;

const guidelineBaseWidth = () => {
  if (isSmall) {
    return 330;
  }
  return 350;
};

const guidelineBaseHeight = () => {
  if (isSmall) {
    return 550;
  } else if (width > 410) {
    return 620;
  }
  return 680;
};

const percentBaseWidth = (val: number) => {
  return width * (val / 100);
};

const percentBaseHeight = (val: number) => {
  return height * (val / 100);
};

const guidelineBaseFonts = () => {
  if (width > 410) {
    return 430;
  }
  return 400;
};

const horizontalScale = (size: number) => (width / guidelineBaseWidth()) * size;

const verticalScale = (size: number) => (height / guidelineBaseHeight()) * size;

const fontSizeScale = (size: number) =>
  Math.round((size * width) / guidelineBaseFonts());

export {
  horizontalScale,
  verticalScale,
  fontSizeScale,
  percentBaseWidth,
  percentBaseHeight,
};
