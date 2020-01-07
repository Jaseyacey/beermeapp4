import * as WebBrowser from 'expo-web-browser';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import {Image,Platform,ScrollView,StyleSheet,Text,View,} from 'react-native';
import {Container, Header, Content, Form, Item, Input,Button} from 'native-base';
import { MonoText } from '../components/StyledText';
import Login from '../components/login.component';
import { isPlainObject } from 'mobx/lib/internal';
import { inject } from 'mobx-react';

@inject("stores")
export default class extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {stores} = this.props
    return (
    <Container>
      <View style={StyleSheet.container}>
        <Content scrollEnabled={false}>
          <Image style={StyleSheet.loginBackground} source={SpeechRecognitionResult.config.LoginBG}>
            <View style={StyleSheet.loginForeground}>
              <Login {...this.props}/>
            </View>
          </Image>
        </Content>
      </View>
    </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  },
  loginBackground: {
    flex: 1,
    width: null,
    height: null
  },
  loginForeground: {
    flex:1,
    marginTop: Dimensions.get('window').height/1.75,
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 90,
    bottom: 0
  }
})