import React from 'react'
import {View,Text} from 'react-native'
import {StackNavigator} from 'react-navigation'

import {curck, mami, white} from "../utils/colors"

import Home from './Home/Home'

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
        return (<MainNavigator/>)
    }
}

export default App

