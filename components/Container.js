import React from 'react'
import {View,Text} from 'react-native'
import {StackNavigator} from 'react-navigation'

import {curck, mami, white} from "../utils/colors"

import Home from './Home/Home'
import Login from './Login/Login'

import { connect } from 'react-redux'


const MainNavigator=StackNavigator({
    Main:{
        screen:Home,
        navigationOptions:{
            headerTintColor:white,
            headerStyle:{
                backgroundColor:curck
            },
            title:'Fastidio'
        },
        animationsEnabled:true
    }
})


class App extends React.Component{
    render(){
      if(this.props.login.token) {
        return(<MainNavigator/>)
      }
      else {
        return(<Login/>)
      }
    }
}

function mapStateToProps(state) {
  return {
    login:state.login
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App)
