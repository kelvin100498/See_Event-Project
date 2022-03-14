import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import COLOR from '../../Config/color';
import STYLES from '../StyleLog';
import Poppins from '../../Component/Popins';
import {moderateScale} from 'react-native-size-matters';
import ButtonPrimary from '../../Component/Button';
import Feather from 'react-native-vector-icons/Feather';
import {useDispatch, useSelector} from 'react-redux';

const SignUp = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confimPassword, setConfirmPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);
  const [secureEntry2, setSecureEntry2] = useState(true);

  const dispatch = useDispatch();

  const submitSignUp = () => {
    dispatch({
      type: 'signUp',
      payload: {
        firstName,
        lastName,
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
            marginTop={50}
            size={moderateScale(34)}
            type="Bold"
            color={COLOR.Primary}>
            Join us!
          </Poppins>
        </View>

        {/* Input First Name */}
        <View style={STYLES.inputContainer}>
          <TextInput
            onChangeText={text => setFirstName(text)}
            placeholder="First Name"
            style={STYLES.input}
            value={firstName}
            placeholderTextColor={COLOR.Ash}
          />
        </View>
        {/* Input Last Name */}
        <View style={STYLES.inputContainer}>
          <TextInput
            onChangeText={text => setLastname(text)}
            placeholder="Last Name"
            style={STYLES.input}
            value={lastName}
            placeholderTextColor={COLOR.Ash}
          />
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
        {/* Input Password */}
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

        {/* Input confirmPassword */}
        <View style={STYLES.inputContainer}>
          <View style={STYLES.hidePassword}>
            <TextInput
              onChangeText={text => setConfirmPassword(text)}
              placeholder="Confirm Password"
              style={STYLES.inputPassword}
              value={confimPassword}
              secureTextEntry={secureEntry2}
              placeholderTextColor={COLOR.Ash}
            />
            <TouchableOpacity
              onPress={() => {
                setSecureEntry2(prev => !prev);
              }}>
              {secureEntry2 ? (
                <Feather name="eye-off" color={COLOR.Ash} size={20} />
              ) : (
                <Feather name="eye" color={COLOR.Ash} size={20} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        {/* button */}
        <TouchableOpacity onPress={submitSignUp}>
          <ButtonPrimary marginBottom={moderateScale(24)} text={'Sign Up'} />
        </TouchableOpacity>
        <Poppins type="Bold">Having issue when signup?</Poppins>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
