import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

//screen
import introScreen from '../src/Screen/intro';
import SignInScreen from '../src/Screen/SignIn';
import SignUpScreen from '../src/Screen/SignUp';
import MainNavigation from '../src/Component/BottomTab';
import EventDetail from '../src/Screen/EventDetail';

//color
import COLOR from '../src/Config/color';

const Stack = createNativeStackNavigator();

//stack authen
const authen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="introScreen"
        component={introScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{
          title: 'Sign In',
          headerTitleStyle: {
            color: COLOR.Wheat,
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          title: 'Sign Up',
          headerTitleStyle: {
            color: COLOR.Wheat,
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="Event Detail"
        component={EventDetail}
        options={{
          title: 'Event Detail',
          headerTitleStyle: {
            color: COLOR.Wheat,
          },
          headerStyle: {
            backgroundColor: COLOR.Primary,
          },
        }}
      />
      <Stack.Screen
        name="MainNavigation"
        component={MainNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

//Main Stack
const Router = () => {
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
    <Stack.Navigator>
      {isLogin ? (
        <>
          <Stack.Screen
            name="MainNavigation"
            component={MainNavigation}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Event Detail"
            component={EventDetail}
            options={{
              title: 'Event Detail',
              headerTitleStyle: {
                color: COLOR.Wheat,
              },
              headerStyle: {
                backgroundColor: COLOR.Primary,
              },
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="Authen"
          component={authen}
          options={{headerShown: false}}
        />
      )}
    </Stack.Navigator>
  );
};

export default Router;
