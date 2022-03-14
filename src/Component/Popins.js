import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export default function Poppins({
  children,
  type = 'Reguler',
  size = 16,
  color = '#3E89AE',
  fontName = 'Poppins',
  align = 'center',
  marginTop = 0,
  style = {},
}) {
  const styles = StyleSheet.create({
    text: {
      fontFamily: `${fontName}-${type}`,
      fontSize: moderateScale(size),
      marginTop: moderateScale(marginTop),
      color,
      textAlign: align,
      ...style,
    },
  });
  return <Text style={styles.text}>{children}</Text>;
}
