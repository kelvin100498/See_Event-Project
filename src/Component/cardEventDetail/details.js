import React from 'react';
import {View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLOR from '../../Config/color';
import Poppins from '../Popins';
import {styles} from './style';

export default function Detail({title}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Poppins
          align="left"
          type="SemiBold"
          color={COLOR.Black}
          size={moderateScale(20)}>
          {title}
        </Poppins>
      </View>
    </View>
  );
}
