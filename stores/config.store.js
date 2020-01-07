export default class ConfigStore {
    constructor() {
      this.splashTime = 10000
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