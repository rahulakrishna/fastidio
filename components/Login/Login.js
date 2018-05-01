import React from 'react'
import { View,TouchableOpacity,Text,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import {pinched, white} from '../../utils/colors'
import background from '../../static/background.jpg'
import TwitterButton from './TwitterButon'

const styles = {
  loginContainer: {
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column',
      width:'100%',
      height:'100%'
  },
  loginButton: {
      backgroundColor:pinched,
      padding:10,
      width:200
  },
  loginButtonText: {
      color:white,
      textAlign:'center'
  },
  bannerText: {
      fontSize:20,
      padding:40,
      textAlign:'center',
      color:white,
      fontWeight:'700'
  }
}

class Login extends React.Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.loginContainer}>
        <Text style={styles.bannerText}>Connect with the world in truly native way!</Text>
        <TouchableOpacity style={styles.loginButton} onPress={console.log('Pressed login')}>
            <Text style={styles.loginButtonText}>Log In</Text>
            <TwitterButton/>
        </TouchableOpacity>
      </ImageBackground>
    )
  }
}

export default Login
