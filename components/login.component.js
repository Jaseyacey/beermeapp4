import React, { Component } from "react"
import {Button,Item,Input,Icon,Text,Form} from 'native-base';
import { observer } from 'mobx-react';
import { observable } from 'mobx';
import { setWorldOriginAsync } from "expo/build/AR";
import { render } from "react-dom";

@observer
export default class Login extends Component {
  @observer email = '';
  @observable password = '';

  constructor(props) {
    super(props) 
    }
    signIn() {
      const { auth } = this.props.stores
      const { navigate } = this.props.navigation
      auth.signIn({email: this.email, password: this.password})
        .then(() => {
          navigate('Match')
        })
    }
    render(){
      const { auth } = this.props.stores
      return (
        <Form>
          <Item style={{marginBottom: 10}} rounded>
            <Icon style={{color: "#fff"}} name='person-outline' />
            <Input style={{color: "#fff"}}
              placeholder='Please Enter Email'
              placeholderTextColor="#fff"
              onChange={(email) => this.email = email }/>
          </Item>
          <Item style={{marginBottom: 10}} rounded>
            <Icon style={{color: "#fff"}} name='lock-open' />
            <Input style={{color: "#fff"}}
              placeholder='Please Enter Password'
              placeholderTextColor="#fff"
              onChange={(pass) => this.password = pass } />
          </Item>
          <Button rounded clock style={{marginBottom: 10}}
            onPress={this.signIn.bind(this)}>
              <Text>Log In</Text>
            </Button>
        </Form>
      )
    }
    }