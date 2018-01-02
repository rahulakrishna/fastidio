import React from 'react'
import {Constants} from 'expo'
import {View,StatusBar} from 'react-native'

import {applyMiddleware,createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers/index'

import Container from './components/Container'

import {curck} from './utils/colors'

const store=createStore(
    reducer,
    applyMiddleware()
)

function FastidioStatusBar({backgroundColor,...props}){
    return(
        <View style={{backgroundColor,height:Constants.statusBarHeight}}>
            <StatusBar
                transclucent
                backgroundColor={backgroundColor}
                {...props}
            />
        </View>
    )
}

export default class App extends React.Component {
  render() {
    return (
        <Provider store={store}>
            <View style={{flex:1}}>
            <FastidioStatusBar
                backgroundColor={curck}
            />
            <Container/>
            </View>
        </Provider>
    );
  }
}