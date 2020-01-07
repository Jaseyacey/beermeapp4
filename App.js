import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/Login.screen';
import SettingsScreen from './screens/SettingsScreen';
import ApiKeys from './constants/ApiKeys';
// import * as firebase from 'firebase';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen,
  },
  Login: {
    screen: LoginScreen,
  }
});

export default createAppContainer(AppNavigator);