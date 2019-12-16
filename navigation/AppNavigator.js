import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/splash.screen';
import LoginScreen from '../screens/Login.screen';

createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  SplashScreen: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: SplashScreen,
    
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    }),
  },

  ...MyOtherRoutes,
});