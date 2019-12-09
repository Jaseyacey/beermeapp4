import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/splash.screen';
import LoginScreen from '../screens/Login.screen';
import { createDrawerNavigator } from 'react-navigation-drawer';


const splash = {
  screen: SplashScreen,
  navigationOptions: {
    header: null
  }
}

const RouteConfig = {
  initialRoute: 'Splash'
}
const AppNavigator = DrawerNavigator ({
  Splash: SplashScreen,
  // Login: LoginScreen
}, RouteConfig)

export default AppNavigator;