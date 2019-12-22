import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBDcmh8YcSthE5jDbOVI_hqC62N6LKE8ng",
  authDomain: "beerme-d4c52.firebaseapp.com",
  databaseURL: "https://beerme-d4c52.firebaseio.com",
  projectId: "beerme-d4c52",
  storageBucket: "beerme-d4c52.appspot.com",
  messagingSenderId: "863689408732",
  appId: "1:863689408732:web:a2cee3ebab994c02927419",
  measurementId: "G-L13HSX9TVM"
};


export default class ConfigStore {
    constructor() {
      firebase.initializeApp(config)
      this.splashTime = 1000
      this.splashImg = require('../../images/splash.jpg')
      this.loginBG = require('../assets/images/beerLogin.jpeg')
    }
    get SplashImg() {
      return this.splashImg
    }
    get SplashTime() {
      return this.splashTime
    }
    get LoginBG() {
      return this.loginBG
    }
  }