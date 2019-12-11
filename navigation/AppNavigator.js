// import React from 'react';
// import { createDrawerNavigator } from 'react-navigation-drawer';
// import SplashScreen from '../screens/splash.screen';
// import LoginScreen from '../screens/Login.screen';

// const splash = {
//   screen: SplashScreen,
//   navigationOptions: {
//     header: null
//   }
// }

// const RouteConfig = {
//   initialRoute: 'Splash'
// }
// const navigator = DrawerNavigator ({
//   Splash: SplashScreen,
//   Login: LoginScreen
// }, RouteConfig)

// export default AppNavigator;

import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
  })
);




