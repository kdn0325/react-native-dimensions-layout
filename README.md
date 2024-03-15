# react-native-dimensions-layout

react-native-dimensions-layout

- As a React Native developer, we need to determine the size of components with different display sizes for each device using the app
- Usually, when collaborating using Figma, calculating is annoying and there is a possibility of making mistakes. Even if it is modularized, it can be inaccurate sometimes. It is also difficult to cope with foldable phones or horizontal modes. And some components don't work with percentage
- The best recommendation is using `useWindowDimension` Hooks

## Installation

```sh
npm install react-native-dimensions-layout
# or
yarn add react-native-dimensions-layout
```

## Usage


###  widthPercentage(width: number): number
Calculates the percentage value of the width relative to the screen width.

```javascript
import { widthPercentage } from 'react-native-dimensions-layout';

const screenWidth = 200; // Current screen width
const widthInPercentage = widthPercentage(screenWidth);
console.log(widthInPercentage); // Percentage value of the screen width
 ```

heightPercentage(height: number): number
Calculates the percentage value of the height relative to the screen height.



###  heightPercentage(height: number): number
Calculates the percentage value of the height relative to the screen height.

```javascript
import { heightPercentage } from 'react-native-dimensions-layout';

const screenHeight = 400; // Current screen height
const heightInPercentage = heightPercentage(screenHeight);
console.log(heightInPercentage); // Percentage value of the screen height

 ```

###  fontPercentage(size: number): number
Calculates the percentage value of the font size

```javascript
import { fontPercentage } from 'react-native-dimensions-layout';

const fontSize = 20; // Font size
const fontSizeInPercentage = fontPercentage(fontSize);
console.log(fontSizeInPercentage); // Percentage value of the font size
```


### horizontalScale(value: number): number
Scales the value provided based on the horizontal size of the screen.

```javascript
import { fontPercentage } from 'react-native-dimensions-layout';

const fontSize = 20; // Font size
const fontSizeInPercentage = fontPercentage(fontSize);
console.log(fontSizeInPercentage); // Percentage value of the font size
```

###  verticalScale(value: number): number
Scales the value provided based on the horizontal size of the screen.

```javascript
import { horizontalScale, verticalScale } from 'react-native-dimensions-layout';

const widthValue = 100; // Value to scale horizontally
const heightValue = 100; // Value to scale vertically

const scaledWidth = horizontalScale(widthValue);
const scaledHeight = verticalScale(heightValue);

console.log(scaledWidth); // Scaled width value
console.log(scaledHeight); // Scaled height value

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
