import React, { Component } from "react"
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Alert,
  NativeModules,
  TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"

const { TwitterSignin } = NativeModules

const Constants = {
  TWITTER_CONSUMER_KEY: "kpyc9tUDpHA8XbCZAYpwVUQV5",
  TWITTER_CONSUMER_SECRET: "RjLeIDfRmtCmpUlYc0QxurGva1ckr89ItdTJ5PUdMKykomuhBD"
}

export default class TwitterButton extends Component {
  state = {
    isLoggedIn: false
  }
  componentDidMount() {
    console.log(TwitterSignin)
  }
  _twitterSignIn = () => {
    console.log('Trynna Sign in here')
    TwitterSignin.init(Constants.TWITTER_CONSUMER_KEY, Constants.TWITTER_CONSUMER_SECRET)
    TwitterSignin.logIn()
      .then(loginData => {
        console.log('Thenned logIn')
        console.log(loginData)
        const { authToken, authTokenSecret } = loginData
        if (authToken && authTokenSecret) {
          this.setState({
            isLoggedIn: true
          })
        }
      })
      .catch(error => {
        console.log('If we didn\'t then, did we catch?')
        console.log(error)
      }
    )
    console.log('Kinda reached the end of block')
  }

  handleLogout = () => {
    console.log("logout")
    TwitterSignin.logOut()
    this.setState({
      isLoggedIn: false
    })
  }

  render() {
    const { isLoggedIn } = this.state
    return (
      <View style={{ flex: 1 }}>
        {isLoggedIn
          ? <TouchableOpacity onPress={this.handleLogout}>
              <Text>Log out</Text>
            </TouchableOpacity>
          : <Icon.Button name="logo-twitter" size={32} color="white" style={styles.icon} onPress={this._twitterSignIn}>
              Login with Twitter
            </Icon.Button>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 200,
    height: 50
  }
})
