import React from 'react';
import {StatusBar, TouchableWithoutFeedback} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';

//redux
import {getStartingSoon} from '../../Screen/Home/redux/action';

//color
import COLOR from '../../Config/color';

//import screen
import HomeScreen from '../../Screen/Home';
import ExplorScreen from '../../Screen/Explore';
import ProfileScreen from '../../Screen/Profile/stack';

//import Icon
import Foundation from 'react-native-vector-icons/Foundation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

//helper
import {navigate} from '../../Helper/navigate';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const dispatch = useDispatch();
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={COLOR.Primary}
        translucent={true}
      />

      {/* BottomTab */}
      <Tab.Navigator
        screenOptions={{headerShown: false, tabBarShowLabel: false}}>
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Foundation name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="eksplor"
          component={ExplorScreen}
          options={{
            tabBarIcon: ({color}) => (
              <TouchableWithoutFeedback
                onPress={() => {
                  navigate('eksplor');
                  dispatch(getStartingSoon());
                }}>
                <Feather name="search" color={color} size={25} />
              </TouchableWithoutFeedback>
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <IonIcons name="person-outline" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default MainNavigation;
