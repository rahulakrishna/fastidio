import React from 'react'
import {Text,View,ScrollView,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures'
import FontAwesome from 'react-fontawesome'

const styles=StyleSheet.create({
    tweet:{
        borderWidth:1,
        borderColor:'#a0a0a0',
        margin:2,
        padding:5
    },
    tweetText:{
        fontSize:16
    }
})

class Tweets extends React.Component{
    swipe=(direction,state)=>{
        console.log(direction,state)
    }
    render(){
        return(
            <ScrollView>
                {this.props.tweets.map((tweet)=>(
                    <GestureRecognizer
                        key={tweet.id}
                        onSwipe={(direction,state)=>{this.swipe(direction,state)}}
                    >
                        <View style={styles.tweet}>
                            <Text style={styles.tweetText}>{tweet.text}</Text>
                            <View>
                                
                            </View>
                        </View>
                    </GestureRecognizer>
                ))}
            </ScrollView>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return{

    }
}

function mapStateToProps(state) {
    return{
        tweets:state.tweets.data,
        error:state.tweets.error
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Tweets)