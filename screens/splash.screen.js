import React, {Component } from 'react';
import {Image, View } from 'react-native';
import { inject } from 'mobx-react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import stores from 'react-native';

@inject("stores")
class SplashScreen extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const {stores, navigation } = this.props;
        setTimeout(() => {
            navigation.navigate("Login")
        }, config.store.SplashTime )
    }
    render() {
        const { stores } = this.props
        return (
            <View style={{flex: 1}}>
                <image style={{flex: 1, width: null, height: null}} source= {config.store.SplashImg}/>
            </View>
        )
    }
}

export default SplashScreen;