import React, {Component } from 'react';
import {Image, View } from 'react-native';
import { inject } from 'mobx-react';
import AppNavigator from '../navigation/AppNavigator';
import createStackNavigator from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import stores from 'react-native';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
});

export default createAppContainer(AppNavigator);