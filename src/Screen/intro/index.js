import React from 'react';
import {View, TouchableOpacity, StatusBar} from 'react-native';
import Poppins from '../../Component/Popins';
import ButtonPrimary from '../../Component/Button';
import COLOR from '../../Config/color';
import FastImage from 'react-native-fast-image';
import IlustrasiImage from '../../Assets/Images/LogoIntro.png';
import Logo from '../../Assets/Images/logoSeeEvent.png';
import {moderateScale} from 'react-native-size-matters';

const introScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar backgroundColor={COLOR.cloud} barStyle="dark-content" />
      <View paddingTop={moderateScale(64)} alignItems="center">
        <FastImage
          style={{
            width: moderateScale(240),
            height: moderateScale(194),
            marginHorizontal: moderateScale(68),
          }}
          source={IlustrasiImage}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>
      <View paddingTop={moderateScale(80)} alignItems="center">
        <FastImage
          style={{
            width: moderateScale(228),
            height: moderateScale(48),
            marginHorizontal: moderateScale(68),
          }}
          source={Logo}
          resizeMode={FastImage.resizeMode.contain}
        />
      </View>

      {/* BUTTON */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <ButtonPrimary text={'Sign Up'} />
      </TouchableOpacity>

      {/* BUTTON */}
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <ButtonPrimary
          marginBottom={moderateScale(24)}
          color={COLOR.Primary}
          backgroundColor={COLOR.cloud}
          text={'Sign In'}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MainNavigation')}>
        <Poppins type="Bold">Continue as guest</Poppins>
      </TouchableOpacity>
      <View>
        <Poppins color={COLOR.Ash} marginTop={80} size={12} type="Bold">
          Version v1.1.2
        </Poppins>
      </View>
    </View>
  );
};

export default introScreen;
