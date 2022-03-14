import React from 'react';
import {StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Poppins from '../Popins';
import COLOR from '../../Config/color';

const ButtonPrimary = ({
  icon = {active: false},
  text,
  type = 'Reguler',
  size = 16,
  color = `${COLOR.Wheat}`,
  fontName = 'Poppins',
  align = 'center',
  style = {},
  backgroundColor = `${COLOR.Primary}`,
  height = 48,
  borderRadius = 10,
  justifyContent = 'center',
  alignItems = 'center',
  marginTop = 24,
  marginBottom = 0,
  marginHorizontal = 24,
  borderColor = `${COLOR.Primary}`,
  borderWidth = 2,
}) => {
  const styles = StyleSheet.create({
    btnPrimary: {
      backgroundColor,
      flexDirection: 'row',
      height: moderateScale(height),
      borderRadius,
      justifyContent,
      alignItems,
      marginTop: moderateScale(marginTop),
      marginBottom: moderateScale(marginBottom),
      marginHorizontal: moderateScale(marginHorizontal),
      borderColor,
      borderWidth: moderateScale(borderWidth),
    },
    text: {
      fontFamily: `${fontName}-${type}`,
      fontSize: moderateScale(size),
      color,
      textAlign: align,
      ...style,
    },
  });
  return (
    <View style={styles.btnPrimary}>
      <Poppins style={styles.text}>
        {icon.active ? icon.content : null}
        {text}
      </Poppins>
    </View>
  );
};

export default ButtonPrimary;
