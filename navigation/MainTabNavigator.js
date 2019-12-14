import React from 'react';
import { Platform } from 'react-native';
import { 
  createStackNavigator, 
  createBottomTabNavigator, 
  StackViewTransitionConfigs 
} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SignUpScreen from '../screens/SignUpScreen'; 

const IOS_MODAL_ROUTES = [HomeScreen, LinksScreen, SettingsScreen, SignUpScreen];

let dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  const isModal = IOS_MODAL_ROUTES.some(
    screenName =>
    screenName => 
    screenName === transitionProps.scene.route.routeName ||
    (prevTransitionProps &&
      screenName === prevTransitionProps.scene,route.routeName)
  );
};

const HomeStack = createStackNavigator(
  {DetailScreen, HomeScreen, OptionsScreen}, 
  {initialRouteName: 'HomeScreen', transitionConfig: dynamicModalTransition }
); 