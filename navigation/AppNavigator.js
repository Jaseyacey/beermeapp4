import React from 'react';
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
const AppNavigator = DrawerNavigator ({
  Splash: Splash,
  Login: Login
}, RouteConfig)

export default AppNavigator;