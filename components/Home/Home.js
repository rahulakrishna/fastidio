import React from 'react'
import {View,Text} from 'react-native'
import {TabNavigator} from 'react-navigation'

import Tweets from '../Tweets/Tweets'
import Notifications from '../Notifications/Notifications'
import Mentions from '../Mentions/Mentions'
import Messages from '../Messages/Messages'
import {mami} from "../../utils/colors"
import FontAwesome from 'react-fontawesome'

const Tabs=TabNavigator({
    Tweets:{
        screen:Tweets
    },
    Notifications:{
        screen:Notifications,
        navigationOptions:{
            tabBarLabel:'Notif'
        }
    },
    Mentions:{
        screen:Mentions
    },
    Messages:{
        screen:Messages
    }
}, {
        tabBarPosition: 'bottom',
        animationsEnabled: true,
        tabBarOptions: {
            style:{
                backgroundColor: mami
            }
        }
    })

class Home extends React.Component{
    static navigationOptions={
        title:'Fastidio'
    }
    render(){
        return(
            <View style={{flex:1}}>
                <Tabs/>
            </View>
        )
    }
}

export default Home