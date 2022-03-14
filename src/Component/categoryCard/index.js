import React from 'react';
import {TouchableOpacity} from 'react-native';
import COLOR from '../../Config/color';
import Poppins from '../Popins';
import {categoryStyles} from './style';

export function CategoryCard({title, isActive, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={categoryStyles[isActive ? 'buttonActive' : 'button']}>
      <Poppins color={isActive ? 'white' : 'black'} size={16}>
        {title}
      </Poppins>
    </TouchableOpacity>
  );
}

export function CategoryCard2({title, isActive, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={categoryStyles[isActive ? 'buttonActive2' : 'button2']}>
      <Poppins color={isActive ? 'white' : COLOR.Primary} size={16}>
        {title}
      </Poppins>
    </TouchableOpacity>
  );
}
