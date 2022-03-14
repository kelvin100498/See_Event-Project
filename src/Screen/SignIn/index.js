import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import ButtonPrimary from '../../Component/Button';
import Poppins from '../../Component/Popins';
import COLOR from '../../Config/color';
import STYLES from '../StyleLog';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';

const SignIn = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const submitLogin = () => {
    dispatch({
      type: 'login',
      payload: {
        email,
        password,
      },
    });
  };

  return (
    <View>
      <ScrollView>
        <StatusBar backgroundColor={COLOR.Primary} barStyle="light-content" />
        <View marginHorizontal={moderateScale(38)}>
          <Poppins
            marginTop={110}
            size={moderateScale(34)}
            type="Bold"
            color={COLOR.Primary}>
            Welcome back!
          </Poppins>
        </View>
        {/* Input email */}
        <View style={STYLES.inputContainer}>
          <TextInput
            onChangeText={text => setEmail(text)}
            placeholder="Email"
            style={STYLES.input}
            value={email}
            placeholderTextColor={COLOR.Ash}
          />
        </View>
        {/* input Password */}
        <View style={STYLES.inputContainer}>
          <View style={STYLES.hidePassword}>
            <TextInput
              onChangeText={text => setPassword(text)}
              placeholder="Password"
              style={STYLES.inputPassword}
              value={password}
              secureTextEntry={secureEntry}
              placeholderTextColor={COLOR.Ash}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntry(prev => !prev);
              }}>
              {secureEntry ? (
                <Feather name="eye-off" color={COLOR.Ash} size={20} />
              ) : (
                <Feather name="eye" color={COLOR.Ash} size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={submitLogin}>
          <ButtonPrimary marginBottom={moderateScale(24)} text={'Sign In'} />
        </TouchableOpacity>
        <Poppins type="Bold">Forget Password?</Poppins>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({});
