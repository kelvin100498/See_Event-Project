import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import Profile from './';
import ProfileIntro from './ProfileIntro';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
export default function ProfileStack() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.loginReducer.isLogin);

  const checkLogin = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({type: 'loginSuccess'});
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <Stack.Screen name="Profile" component={Profile} />
      ) : (
        <Stack.Screen name="Profile Intro" component={ProfileIntro} />
      )}
    </Stack.Navigator>
  );
}
