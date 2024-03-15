import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useEffect, useState } from 'react';
import {
  fontSizeScale,
  horizontalScale,
  verticalScale,
} from 'react-native-responsive-design';
import { heightPercentage, widthPercentage } from './util/responsiveSize';

export default function App() {
  const [color, setColor] = useState('#000000');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(
        `#${Math.floor(Math.random() * 16777215)
          .toString(16)
          .padStart(6, '0')}`
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.boxContainer, backgroundColor: color }}>
        <Text style={styles.box}>Small Box</Text>
      </View>
      <View style={{ ...styles.boxContainer2, backgroundColor: color }}>
        <Text style={styles.box}>Medium Box</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer: {
    width: widthPercentage(60),
    height: heightPercentage(60),
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxContainer2: {
    width: horizontalScale(80),
    height: verticalScale(80),
    marginVertical: verticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    textAlign: 'center',
    fontSize: fontSizeScale(20),
    color: '#fff',
  },
});
