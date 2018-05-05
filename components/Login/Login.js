import React from 'react'
import { View,TouchableOpacity,Text,ImageBackground } from 'react-native'
import { connect } from 'react-redux'
import {pinched, white} from '../../utils/colors'
import background from '../../static/background.jpg'
import TwitterButton from './TwitterButton'

const styles = {
  loginContainer: {
    flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      width:'100%',
      height:'100%'
  },
  loginButton: {
      backgroundColor:pinched,
      padding:10,
      width:200,
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
      fontWeight:'700',
      height:300
  }
}
{/* <TouchableOpacity style={styles.loginButton} onPress={console.log('Pressed login')}>
    <Text style={styles.loginButtonText}>Log In</Text>
</TouchableOpacity> */}
class Login extends React.Component {
  render() {
    return (
      <ImageBackground source={background} style={styles.loginContainer}>
        <Text style={styles.bannerText}>Connect with the world in a truly native way!</Text>
        <TwitterButton style={styles.loginButton}/>
      </ImageBackground>
    )
  }
}

export default Login
