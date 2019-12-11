import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/splash.screen';
import LoginScreen from '../screens/Login.screen';

const splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const RouteConfig = {
  initialRoute: 'Splash'
}
const navigate = createStackNavigator ({
  Splash: SplashScreen,
  Login: LoginScreen
}, RouteConfig)

export default navigate;