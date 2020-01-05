import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { StackNavigator } from 'react-navigation-stack'; 
import { DrawerNavigator } from 'react-navigation';
import SplashScreen from '../screens/splash.screen';
import LoginScreen from '../screens/Login.screen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MatchScreen from '../screens/match.screen';
import { HeaderTitle } from 'react-navigation-stack';

const splash = {
  screen: SplashScreen,
  navigationOptions: {
    headerShown: 'false'
  }
}

const Login = {
  screen: LoginScreen,
  navigationOptions: {
    headerShown: 'false'
  }
}

const Match = {
  screen: MatchScreen,
  navigationOptions: {
    headerMode: 'screen',
    HeaderTitle: 'Matches',
    drawerLabel: 'Matches'
  }
}

const MatchStack = StackNavigator({
  Match: Match
},{})

const RouteConfig = {
  initialRoute: 'Splash'
}
const navigate = createStackNavigator ({
  Splash: SplashScreen,
  Login: LoginScreen,
  Links: LinksScreen,
  import: SettingsScreen,
  Match: {screen: MatchStack}
}, RouteConfig)

export default AppNavigator;