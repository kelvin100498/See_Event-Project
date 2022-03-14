import React from 'react';
import {View, StatusBar, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ButtonPrimary from '../../Component/Button';
import COLOR from '../../Config/color';
import FastImage from 'react-native-fast-image';
import IlustrasiImageProfile from '../../Assets/Images/LogoProfileIntro.png';
import {moderateScale} from 'react-native-size-matters';
import {HeaderComponent} from '../../Component/Header';
import Poppins from '../../Component/Popins';
import {useDispatch} from 'react-redux';

const ProfileIntro = props => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={COLOR.Primary} barStyle="light-content" />
      <HeaderComponent />
      <View>
        <View marginHorizontal={moderateScale(38)}>
          <Poppins
            marginTop={54}
            size={moderateScale(24)}
            type="Bold"
            color={COLOR.Primary}>
            Sign In or Sign Up to Continue
          </Poppins>
        </View>
        <View paddingTop={moderateScale(32)} alignItems="center">
          <FastImage
            style={{
              width: moderateScale(240),
              height: moderateScale(240),
              marginHorizontal: moderateScale(68),
            }}
            source={IlustrasiImageProfile}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>

        {/* BUTTON */}
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <ButtonPrimary marginTop={moderateScale(32)} text={'Sign Up'} />
        </TouchableOpacity>

        {/* BUTTON */}
        <TouchableOpacity onPress={() => props.navigation.navigate('SignIn')}>
          <ButtonPrimary
            marginBottom={moderateScale(24)}
            color={COLOR.Primary}
            backgroundColor={COLOR.cloud}
            text={'Sign In'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileIntro;
