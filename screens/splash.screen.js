import React, {Component } from 'react';
import {Image, View } from 'react-native';
import { inject } from 'mobx-react';
import AppNavigator from '../navigation/AppNavigator';
import createStackNavigator from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import stores from 'react-native';

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}

const Splashscreen = AppNavigator({
  Home: {
    screen: LoginScreen,
  },
});

export default Splashscreen;