import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import LOGO from '../../Assets/Images/Logoheader.png';
import FastImage from 'react-native-fast-image';
import Poppins from '../Popins';

const HeaderComponent = ({
  text,
  height = 70,
  backgroundColor = `${COLOR.Primary}`,
  widthImage = 155.56,
  heightImage = 70,
  source = `${LOGO}`,
  alignItems = 'center',
  type = 'Bold',
  size = 24,
  color = 'white',
  fontName = 'Poppins',
  align = 'center',
  paddingTop = 20,
  paddingBot = 0,
  style = {},
}) => {
  const styles = StyleSheet.create({
    container: {
      height: moderateScale(height),
    },
    container2: {
      backgroundColor,
      flex: 1,
      alignItems,
    },
    fastimage: {
      width: moderateScale(widthImage),
      height: moderateScale(heightImage),
    },
    text: {
      fontFamily: `${fontName}-${type}`,
      fontSize: moderateScale(size),
      color,
      textAlign: align,
      paddingBottom: moderateScale(paddingBot),
      paddingTop: moderateScale(paddingTop),
      ...style,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <FastImage
          style={styles.fastimage}
          source={source}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Poppins style={styles.text}>{text}</Poppins>
      </View>
    </View>
  );
};

export {HeaderComponent};
