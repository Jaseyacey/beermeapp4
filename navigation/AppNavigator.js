import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/splash.screen';
import LoginScreen from '../screens/Login.screen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';

const splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const Login = {
  screen: LoginScreen,
  navigationOptions: {
    header: null
  }
}

const RouteConfig = {
  initialRoute: 'Splash'
}
const navigate = createStackNavigator ({
  Splash: SplashScreen,
  Login: LoginScreen,
  Links: LinksScreen,
  import: SettingsScreen
}, RouteConfig)

export default AppNavigator;